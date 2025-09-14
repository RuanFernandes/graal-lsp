// Completion items for file operations

import { CompletionItem } from 'vscode-languageserver/node';

export const TFileOperationsItems: CompletionItem[] = [
    {
        label: 'play',
        kind: 2,
        detail: 'play(filename)',
        documentation:
            'Plays a sound/music file or whatever can be played with Windows Media Player.',
    },
    {
        label: 'play2',
        kind: 2,
        detail: 'play2(filename,x,y,volume)',
        documentation:
            'Plays a sound/music at x,y with the specified volume (1=default volume).',
    },
    {
        label: 'playlooped',
        kind: 2,
        detail: 'playlooped(filename)',
        documentation: 'Plays a sound file (*.wav) looped.',
    },
    {
        label: 'stopsound',
        kind: 2,
        detail: 'stopsound(filename)',
        documentation: 'Stops playing a sound file (*.wav).',
    },
    {
        label: 'stopmidi',
        kind: 2,
        detail: 'stopmidi()',
        documentation: 'Stops playing the currently running midi file.',
    },
    {
        label: 'setmusicvolume',
        kind: 2,
        detail: 'setmusicvolume(left,right)',
        documentation: 'Changes the volume for music (0..1).',
    },
    {
        label: 'openurl',
        kind: 2,
        detail: 'openurl(URL)',
        documentation:
            'Opens the given URL in the default web browser (without the leading http://!).',
    },
    {
        label: 'openurl2',
        kind: 2,
        detail: 'openurl2(URL,width,height)',
        documentation:
            'Opens the given URL in a web browser window of the specified size (url without http://!).',
    },
    {
        label: 'showfile',
        kind: 2,
        detail: 'showfile(filename)',
        documentation:
            'Opens the file with the program associated with the file extension.',
    },
    {
        label: 'saveinfo',
        kind: 2,
        detail: 'saveinfo(string,string)',
        documentation: 'Saves info as info (server-side).',
    },
    {
        label: 'savelog',
        kind: 2,
        detail: 'savelog(string)',
        documentation: 'Saves string to log (server-side).',
    },
    {
        label: 'savelog2',
        kind: 2,
        detail: 'savelog2(string,string)',
        documentation: 'Saves string to logfile string (server-side).',
    },
];
