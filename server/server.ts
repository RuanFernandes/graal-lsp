import { TextDocument } from 'vscode-languageserver-textdocument';
import { TServerNPCItems } from '../objects/TServerNPC';
import { TServerPlayerItems } from '../objects/TServerPlayer';
import { TServerLevelItems } from '../objects/TServerLevel';
import { GSCommands } from '../objects/GSCommands';
import { TFileOperationsItems } from '../objects/TFileOperations';
import { OtherCompletions } from '../objects/OtherCompletions';
import {
    createConnection,
    Diagnostic,
    ProposedFeatures,
    TextDocuments,
    TextDocumentSyncKind,
    InitializeParams,
    CompletionItem,
} from 'vscode-languageserver/node';

// LSP connection and document management
const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Capabilities and initialization
connection.onInitialize((_params: InitializeParams) => ({
    capabilities: {
        textDocumentSync: TextDocumentSyncKind.Incremental,
        completionProvider: {
            resolveProvider: true,
            triggerCharacters: ['.', ':', ' '],
        },
        hoverProvider: true,
    },
}));

// Document diagnostics
documents.onDidChangeContent((change) => {
    const diagnostics: Diagnostic[] = [];
    connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
});

// Completion items
connection.onCompletion((_params): CompletionItem[] => {
    const items = [
        ...GSCommands,
        ...TServerNPCItems,
        ...TServerPlayerItems,
        ...TServerLevelItems,
        ...TFileOperationsItems,
        ...OtherCompletions,
    ];
    return items;
});

// Completion details
connection.onCompletionResolve((item: CompletionItem): CompletionItem => item);

// Generic handler to ignore any unimplemented requests and avoid errors
const ignoreRequest = () => null;
connection.onHover(ignoreRequest);
connection.onSignatureHelp?.(ignoreRequest);
connection.onDefinition?.(ignoreRequest);
connection.onReferences?.(ignoreRequest);
connection.onDocumentFormatting?.(ignoreRequest);
connection.onDocumentRangeFormatting?.(ignoreRequest);
connection.onDocumentSymbol?.(ignoreRequest);
connection.onDocumentHighlight?.(ignoreRequest);
connection.onTypeDefinition?.(ignoreRequest);
connection.onImplementation?.(ignoreRequest);
connection.onRenameRequest?.(ignoreRequest);
connection.onPrepareRename?.(ignoreRequest);
connection.onCodeAction?.(ignoreRequest);
connection.onDocumentColor?.(ignoreRequest);
connection.onColorPresentation?.(ignoreRequest);
connection.onFoldingRanges?.(ignoreRequest);
connection.onSelectionRanges?.(ignoreRequest);

documents.listen(connection);
connection.listen();
