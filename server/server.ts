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

documents.listen(connection);
connection.listen();
