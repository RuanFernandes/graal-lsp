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

    // Só inicia o client se o arquivo ativo for graalscript
    if (vscode.window.activeTextEditor?.document.languageId === 'graalscript') {
        context.subscriptions.push(client);
        await client.start();
    }

    // Status bar item para mostrar se o LSP está rodando
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left,
        100
    );
    statusBarItem.text = '$(rocket) GraalScript Language Server';
    statusBarItem.tooltip = 'The GraalScript language server is running';
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);

    // Atualiza visibilidade do status ao trocar de editor
    vscode.window.onDidChangeActiveTextEditor(
        (editor) => {
            if (editor && editor.document.languageId === 'graalscript') {
                if (!client.isRunning()) {
                    client.start();
                }
                statusBarItem.show();
            } else {
                if (client.isRunning()) {
                    client.stop();
                }
                statusBarItem.hide();
            }
        },
        null,
        context.subscriptions
    );

    // Mostra/oculta ao abrir arquivos
    if (vscode.window.activeTextEditor?.document.languageId !== 'graalscript') {
        statusBarItem.hide();
    }
}
