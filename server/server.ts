import { TextDocument } from 'vscode-languageserver-textdocument';
import {
    createConnection,
    Diagnostic,
    ProposedFeatures,
    TextDocuments,
    TextDocumentSyncKind,
    InitializeParams,
    CompletionItem,
    CompletionItemKind,
    CompletionParams,
    Hover,
    MarkupKind,
    SignatureHelp,
    SignatureInformation,
    ParameterInformation,
} from 'vscode-languageserver/node';
import * as https from 'https';

// Tipos para as definições da API
interface ApiFunction {
    name: string;
    params: string[];
    returns: string;
    description: string;
    example: string;
    scope: string;
}

interface ApiFunctions {
    [key: string]: ApiFunction;
}

// Cache das definições da API
let apiFunctions: ApiFunctions = {};
let apiLoaded = false;

// LSP connection and document management
const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Função para buscar definições da API
async function loadApiDefinitions(): Promise<void> {
    return new Promise((resolve, reject) => {
        https
            .get('https://api.gscript.dev', (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    try {
                        apiFunctions = JSON.parse(data);
                        apiLoaded = true;
                        connection.console.log(
                            'API definitions loaded successfully'
                        );
                        resolve();
                    } catch (error) {
                        connection.console.error(
                            'Failed to parse API definitions: ' + error
                        );
                        reject(error);
                    }
                });
            })
            .on('error', (error) => {
                connection.console.error(
                    'Failed to load API definitions: ' + error
                );
                reject(error);
            });
    });
}

// Map de funções locais por URI
const localFunctionsByUri: Map<string, CompletionItem[]> = new Map();

// Função para extrair funções locais do documento
function extractLocalFunctionsFromText(text: string): CompletionItem[] {
    const functionRegex = /function\s+(\w+)\s*\(([^)]*)\)/g;
    const functions: CompletionItem[] = [];
    let match;

    while ((match = functionRegex.exec(text)) !== null) {
        const funcName = match[1];
        const params = match[2].trim();
        const paramList = params ? params.split(',').map((p) => p.trim()) : [];

        functions.push({
            label: funcName,
            kind: CompletionItemKind.Function,
            detail: `function ${funcName}(${params})`,
            documentation: `Local function defined in this file`,
            insertText: `${funcName}(${paramList
                .map(
                    (_, i) => `\${${i + 1}:${paramList[i] || 'arg' + (i + 1)}}`
                )
                .join(', ')})`,
            insertTextFormat: 2, // Snippet format
        });
    }

    return functions;
}

function updateLocalFunctionsForUri(uri: string, text: string | null) {
    if (!text) {
        localFunctionsByUri.delete(uri);
        return;
    }
    const funcs = extractLocalFunctionsFromText(text);
    localFunctionsByUri.set(uri, funcs);
}

// Função para converter definições da API em CompletionItems
function apiToCompletionItems(): CompletionItem[] {
    const items: CompletionItem[] = [];

    for (const [key, func] of Object.entries(apiFunctions)) {
        const params = func.params
            .map((p, i) => `\${${i + 1}:${p}}`)
            .join(', ');

        items.push({
            label: func.name,
            kind: CompletionItemKind.Function,
            detail: `${func.name}(${func.params.join(', ')}): ${func.returns}`,
            documentation: {
                kind: MarkupKind.Markdown,
                value: `**${func.name}**\n\n${func.description}\n\n**Scope:** ${func.scope}\n\n**Example:**\n\`\`\`graalscript\n${func.example}\n\`\`\``,
            },
            insertText: `${func.name}(${params})`,
            insertTextFormat: 2, // Snippet format
            data: key, // Para usar no resolve
        });
    }

    return items;
}

// Capabilities and initialization
connection.onInitialize(async (_params: InitializeParams) => {
    // Carrega as definições da API no cache
    try {
        await loadApiDefinitions();
        connection.console.log('API definitions cached successfully');
    } catch (error) {
        connection.console.error('Failed to cache API definitions: ' + error);
    }

    return {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            completionProvider: {
                resolveProvider: true,
                triggerCharacters: ['.', '('],
            },
            hoverProvider: true,
            signatureHelpProvider: {
                triggerCharacters: ['(', ','],
            },
        },
    };
});

// Atualiza o cache da API a cada 5 minutos
setInterval(async () => {
    try {
        await loadApiDefinitions();
        connection.console.log('API definitions cache refreshed');
    } catch (error) {
        connection.console.error('Failed to refresh API cache: ' + error);
    }
}, 5 * 60 * 1000);

// Document diagnostics e atualização de cache local
documents.onDidChangeContent((change) => {
    const diagnostics: Diagnostic[] = [];
    connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
    updateLocalFunctionsForUri(change.document.uri, change.document.getText());
});

// Quando documento é aberto
documents.onDidOpen((event) => {
    updateLocalFunctionsForUri(event.document.uri, event.document.getText());
});

// Quando documento é fechado
documents.onDidClose((event) => {
    updateLocalFunctionsForUri(event.document.uri, null);
});

// Completion items
connection.onCompletion((params: CompletionParams): CompletionItem[] => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return [];

    const apiItems = apiLoaded ? apiToCompletionItems() : [];
    const localFunctions = localFunctionsByUri.get(document.uri) || [];

    return [...apiItems, ...localFunctions];
});

// Completion details
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    // Pode adicionar mais detalhes aqui se necessário
    return item;
});

// Hover provider
connection.onHover((params): Hover | null => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;

    const text = document.getText();
    const offset = document.offsetAt(params.position);

    // Encontra a palavra sob o cursor
    const wordRange = /\b\w+\b/g;
    let match;
    let word = '';

    while ((match = wordRange.exec(text)) !== null) {
        if (match.index <= offset && offset <= match.index + match[0].length) {
            word = match[0];
            break;
        }
    }

    if (!word) return null;

    // Verifica se é uma função da API
    const apiFunc = apiFunctions[word];
    if (apiFunc) {
        return {
            contents: {
                kind: MarkupKind.Markdown,
                value: `**${apiFunc.name}(${apiFunc.params.join(', ')}): ${
                    apiFunc.returns
                }**\n\n${apiFunc.description}\n\n**Scope:** ${
                    apiFunc.scope
                }\n\n**Example:**\n\`\`\`graalscript\n${
                    apiFunc.example
                }\n\`\`\``,
            },
        };
    }

    // Verifica se é uma função local
    const funcRegex = new RegExp(`function\\s+${word}\\s*\\(([^)]*)\\)`, 'g');
    const funcMatch = funcRegex.exec(text);
    if (funcMatch) {
        return {
            contents: {
                kind: MarkupKind.Markdown,
                value: `**function ${word}(${funcMatch[1]})**\n\nLocal function defined in this file`,
            },
        };
    }

    return null;
});

// Signature Help provider
connection.onSignatureHelp((params): SignatureHelp | null => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;

    const text = document.getText();
    const offset = document.offsetAt(params.position);

    // Encontra a chamada de função atual
    let funcStart = offset;
    let parenCount = 1;

    // Volta para encontrar o '(' inicial
    for (let i = offset - 1; i >= 0; i--) {
        if (text[i] === ')') parenCount++;
        if (text[i] === '(') {
            parenCount--;
            if (parenCount === 0) {
                funcStart = i;
                break;
            }
        }
    }

    // Pega o nome da função
    const beforeParen = text.substring(0, funcStart);
    const funcMatch = /(\w+)\s*$/.exec(beforeParen);
    if (!funcMatch) return null;

    const funcName = funcMatch[1];
    const apiFunc = apiFunctions[funcName];

    if (!apiFunc) return null;

    // Calcula o índice do parâmetro atual
    const textInParams = text.substring(funcStart + 1, offset);
    const commaCount = (textInParams.match(/,/g) || []).length;

    const parameters: ParameterInformation[] = apiFunc.params.map((param) => ({
        label: param,
    }));

    return {
        signatures: [
            {
                label: `${funcName}(${apiFunc.params.join(', ')}): ${
                    apiFunc.returns
                }`,
                documentation: {
                    kind: MarkupKind.Markdown,
                    value: apiFunc.description,
                },
                parameters,
            },
        ],
        activeSignature: 0,
        activeParameter: Math.min(commaCount, parameters.length - 1),
    };
});

documents.listen(connection);
connection.listen();

// Handlers para notificações do cliente (didOpen/didChange/didClose)
connection.onNotification(
    'workspace/didOpen',
    (params: { uri: string; text: string }) => {
        try {
            updateLocalFunctionsForUri(params.uri, params.text);
        } catch (e) {
            connection.console.error('Error handling didOpen: ' + e);
        }
    }
);

connection.onNotification(
    'workspace/didChange',
    (params: { uri: string; text: string }) => {
        try {
            updateLocalFunctionsForUri(params.uri, params.text);
        } catch (e) {
            connection.console.error('Error handling didChange: ' + e);
        }
    }
);

connection.onNotification('workspace/didClose', (params: { uri: string }) => {
    try {
        updateLocalFunctionsForUri(params.uri, null);
    } catch (e) {
        connection.console.error('Error handling didClose: ' + e);
    }
});
