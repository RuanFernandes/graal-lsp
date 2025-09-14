// objects/GSCommands.ts
// All comments and documentation in English.
import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node';

export const GSCommands: CompletionItem[] = [
    // --- GUI objects for 'new' ---
    {
        label: 'GuiControl',
        kind: CompletionItemKind.Class,
        detail: 'GUI Control object',
        documentation: 'Base GUI control object.',
    },
    {
        label: 'GuiWindowCtrl',
        kind: CompletionItemKind.Class,
        detail: 'GUI Window Control',
        documentation: 'Window control for GUI.',
    },
    {
        label: 'GuiBitmapBorderCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Bitmap Border Control',
        documentation: 'Bitmap border GUI control.',
    },
    {
        label: 'GuiFlash',
        kind: CompletionItemKind.Class,
        detail: 'Flash GUI Control',
        documentation: 'Flash GUI control.',
    },
    {
        label: 'GuiScrollCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Scroll GUI Control',
        documentation: 'Scroll GUI control.',
    },
    {
        label: 'GuiStretchCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Stretch GUI Control',
        documentation: 'Stretch GUI control.',
    },
    {
        label: 'GuiFrameSetCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Frame Set GUI Control',
        documentation: 'Frame set GUI control.',
    },
    {
        label: 'GuiTextCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Text GUI Control',
        documentation: 'Text GUI control.',
    },
    {
        label: 'GuiTextEditCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Text Edit GUI Control',
        documentation: 'Text edit GUI control.',
    },
    {
        label: 'GuiTextEditSliderCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Text Edit Slider GUI Control',
        documentation: 'Text edit slider GUI control.',
    },
    {
        label: 'GuiMLTextCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Multi-line Text GUI Control',
        documentation: 'Multi-line text GUI control.',
    },
    {
        label: 'GuiMLTextEditCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Multi-line Text Edit GUI Control',
        documentation: 'Multi-line text edit GUI control.',
    },
    {
        label: 'GuiButtonCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Button GUI Control',
        documentation: 'Button GUI control.',
    },
    {
        label: 'GuiCheckBoxCtrl',
        kind: CompletionItemKind.Class,
        detail: 'CheckBox GUI Control',
        documentation: 'CheckBox GUI control.',
    },
    {
        label: 'GuiRadioCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Radio GUI Control',
        documentation: 'Radio GUI control.',
    },
    {
        label: 'GuiTabCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Tab GUI Control',
        documentation: 'Tab GUI control.',
    },
    {
        label: 'GuiBitmapButtonCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Bitmap Button GUI Control',
        documentation: 'Bitmap button GUI control.',
    },
    {
        label: 'GuiMenuCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Menu GUI Control',
        documentation: 'Menu GUI control.',
    },
    {
        label: 'GuiPopUpMenuCtrl',
        kind: CompletionItemKind.Class,
        detail: 'PopUp Menu GUI Control',
        documentation: 'PopUp menu GUI control.',
    },
    {
        label: 'GuiPopUpEditCtrl',
        kind: CompletionItemKind.Class,
        detail: 'PopUp Edit GUI Control',
        documentation: 'PopUp edit GUI control.',
    },
    {
        label: 'GuiTextListCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Text List GUI Control',
        documentation: 'Text list GUI control.',
    },
    {
        label: 'GuiTreeViewCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Tree View GUI Control',
        documentation: 'Tree view GUI control.',
    },
    {
        label: 'GuiShowImgCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Show Image GUI Control',
        documentation: 'Show image GUI control.',
    },
    {
        label: 'GuiDrawingPanel',
        kind: CompletionItemKind.Class,
        detail: 'Drawing Panel GUI Control',
        documentation: 'Drawing panel GUI control.',
    },
    {
        label: 'GuiBitmapCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Bitmap GUI Control',
        documentation: 'Bitmap GUI control.',
    },
    {
        label: 'GuiProgressCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Progress GUI Control',
        documentation: 'Progress GUI control.',
    },
    {
        label: 'GuiSliderCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Slider GUI Control',
        documentation: 'Slider GUI control.',
    },
    {
        label: 'GuiContextMenuCtrl',
        kind: CompletionItemKind.Class,
        detail: 'Context Menu GUI Control',
        documentation: 'Context menu GUI control.',
    },
    {
        label: 'TStaticVar',
        kind: CompletionItemKind.Class,
        detail: 'Static Variable Object',
        documentation: 'Static variable object.',
    },
    {
        label: 'TServerPlayer',
        kind: CompletionItemKind.Class,
        detail: 'Server Player Object',
        documentation: 'Server player object.',
    },
];
