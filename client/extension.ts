import * as path from 'path';
import * as vscode from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind,
} from 'vscode-languageclient/node';

export async function activate(context: vscode.ExtensionContext) {
    const serverModule = context.asAbsolutePath(
        path.join('out', 'server', 'server.js')
    );

    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: { execArgv: ['--nolazy', '--inspect=6009'] },
        },
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'graalscript' }],
    };

    const client = new LanguageClient(
        'graalscriptServer',
        'GraalScript Language Server',
        serverOptions,
        clientOptions
    );

    // Inicia o client sempre que a janela de extensão for carregada
    context.subscriptions.push(client);
    await client.start();

    // Status bar item para mostrar se o LSP está rodando
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left,
        100
    );
    statusBarItem.text = '$(rocket) GraalScript Language Server';
    statusBarItem.tooltip = 'The GraalScript language server is running';
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);

    // Atualiza visibilidade do status ao trocar de editor e notifica o servidor
    vscode.window.onDidChangeActiveTextEditor(
        (editor) => {
            if (editor && editor.document.languageId === 'graalscript') {
                statusBarItem.show();
                // envia conteúdo do documento ao servidor para atualizar cache local
                client.sendNotification('workspace/didOpen', {
                    uri: editor.document.uri.toString(),
                    text: editor.document.getText(),
                });
            } else {
                statusBarItem.hide();
            }
        },
        null,
        context.subscriptions
    );

    // Notifica servidor quando documentos são abertos/fechados/alterados
    vscode.workspace.onDidOpenTextDocument(
        (doc) => {
            client.sendNotification('workspace/didOpen', {
                uri: doc.uri.toString(),
                text: doc.getText(),
            });
        },
        null,
        context.subscriptions
    );

    vscode.workspace.onDidChangeTextDocument(
        (e) => {
            client.sendNotification('workspace/didChange', {
                uri: e.document.uri.toString(),
                text: e.document.getText(),
            });
        },
        null,
        context.subscriptions
    );

    vscode.workspace.onDidCloseTextDocument(
        (doc) => {
            client.sendNotification('workspace/didClose', {
                uri: doc.uri.toString(),
            });
        },
        null,
        context.subscriptions
    );

    // Mostra/oculta ao abrir arquivos
    if (vscode.window.activeTextEditor?.document.languageId !== 'graalscript') {
        statusBarItem.hide();
    }
}
