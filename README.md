# GraalScript Language Server

This project is a Language Server Protocol (LSP) implementation for GraalScript, designed to provide intelligent code completion, documentation, and language support for GraalScript files in Visual Studio Code.

## Features

-   Autocomplete for all GraalScript commands, objects, functions, and built-in events
-   Context-aware suggestions for NPC, player, level, file operations, and more
-   Hover documentation for commands and properties
-   Status bar indicator for LSP activity
-   Only activates for files with the `graalscript` language id

## Structure

-   `server/` — LSP server implementation
-   `client/` — VS Code extension client
-   `objects/` — Completion items for GraalScript objects and commands

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to build the extension
4. Open in VS Code and start editing `.txt` files with the `graalscript` language id

## License

MIT — see LICENSE for details

## Credits

This project is community-driven and welcomes contributions. All code and documentation are open for improvement and extension.
