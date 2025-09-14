// Completion items for TServerPlayer

import { CompletionItem } from 'vscode-languageserver/node';

export const TServerPlayerItems: CompletionItem[] = [
    // Properties
    {
        label: 'account',
        kind: 6,
        detail: 'string (read only)',
        documentation: 'The account name of the player.',
    },
    {
        label: 'adminlevel',
        kind: 6,
        detail: 'integer (read only)',
        documentation: 'The admin level of the player.',
    },
    {
        label: 'ap',
        kind: 6,
        detail: 'integer',
        documentation: 'Action points of the player.',
    },
    {
        label: 'arrows',
        kind: 6,
        detail: 'integer',
        documentation: 'Number of arrows the player has.',
    },
    {
        label: 'chat',
        kind: 6,
        detail: 'string',
        documentation: 'Chat message content.',
    },
    { label: 'guild', kind: 6, detail: 'string', documentation: 'Guild name.' },
    { label: 'hp', kind: 6, detail: 'float', documentation: 'Health points.' },

    // Methods
    {
        label: 'addweapon',
        kind: 2,
        detail: 'addweapon(str)',
        documentation: 'Adds a weapon by name to the player.',
    },
    {
        label: 'attachplayertoobj',
        kind: 2,
        detail: 'attachplayertoobj(int, int)',
        documentation: 'Attaches player to object.',
    },
    {
        label: 'destroy',
        kind: 2,
        detail: 'destroy()',
        documentation: 'Deletes the player created by script.',
    },
    {
        label: 'enableweapons',
        kind: 2,
        detail: 'enableweapons()',
        documentation: 'Enables weapons for this player.',
    },
    {
        label: 'disableweapons',
        kind: 2,
        detail: 'disableweapons()',
        documentation: 'Disables weapons for this player.',
    },
    {
        label: 'detachplayer',
        kind: 2,
        detail: 'detachplayer()',
        documentation: 'Detaches the player from the NPC.',
    },
    {
        label: 'serverwarp',
        kind: 2,
        detail: 'serverwarp(server)',
        documentation: 'Warps the player to another server.',
    },
    {
        label: 'setlevel',
        kind: 2,
        detail: 'setlevel(filename)',
        documentation: 'Warps the player (server-side only).',
    },
    {
        label: 'setlevel2',
        kind: 2,
        detail: 'setlevel2(filename,x,y)',
        documentation:
            'Warps the player to the specified level and position (server-side only).',
    },
    {
        label: 'seturllevel',
        kind: 2,
        detail: 'seturllevel(URL)',
        documentation:
            'Warps the player to a URL (without the leading http://).',
    },
    {
        label: 'setbody',
        kind: 2,
        detail: 'setbody(filename)',
        documentation: 'Sets the body image for the player.',
    },
    {
        label: 'sethead',
        kind: 2,
        detail: 'sethead(filename)',
        documentation: 'Sets the head image for the player.',
    },
    {
        label: 'setsword',
        kind: 2,
        detail: 'setsword(imgname,power)',
        documentation: "Changes the player's sword (-20 <= power <= 20).",
    },
    {
        label: 'setshield',
        kind: 2,
        detail: 'setshield(imgname,power)',
        documentation: "Changes the player's shield (0 <= power <= 0).",
    },
    {
        label: 'setani',
        kind: 2,
        detail: 'setani(ganifile)',
        documentation: 'Sets the animation for the player.',
    },
    {
        label: 'replaceani',
        kind: 2,
        detail: 'replaceani(ani,newani)',
        documentation: 'Replaces a default animation.',
    },
    {
        label: 'setplayerdir',
        kind: 2,
        detail: 'setplayerdir(direction)',
        documentation: 'Sets the player looking direction.',
    },
    {
        label: 'setgender',
        kind: 2,
        detail: 'setgender(gender)',
        documentation: 'Sets the gender of the player (male/female).',
    },
    {
        label: 'takeplayercarry',
        kind: 2,
        detail: 'takeplayercarry()',
        documentation: 'Removes the object carried by the player.',
    },
    {
        label: 'takeplayerhorse',
        kind: 2,
        detail: 'takeplayerhorse()',
        documentation: "Removes the player's horse.",
    },
    {
        label: 'freezeplayer',
        kind: 2,
        detail: 'freezeplayer(seconds)',
        documentation: "The player can't move for the given time.",
    },
    {
        label: 'freezeplayer2',
        kind: 2,
        detail: 'freezeplayer2()',
        documentation: 'Freezes player indefinitely.',
    },
    {
        label: 'hideplayer',
        kind: 2,
        detail: 'hideplayer(seconds)',
        documentation: 'Hides the player for the specified time.',
    },
    {
        label: 'hidesword',
        kind: 2,
        detail: 'hidesword(seconds)',
        documentation: "Hides the player's sword for the specified time.",
    },
    {
        label: 'hurt',
        kind: 2,
        detail: 'hurt(halfhearts)',
        documentation: 'Hurts the player.',
    },
    {
        label: 'disabledefmovement',
        kind: 2,
        detail: 'disabledefmovement()',
        documentation: 'Disables the normal player movement.',
    },
    {
        label: 'enabledefmovement',
        kind: 2,
        detail: 'enabledefmovement()',
        documentation: 'Enables the normal player movement again.',
    },
    {
        label: 'disablepause',
        kind: 2,
        detail: 'disablepause()',
        documentation: 'Disables the normal player pause.',
    },
    {
        label: 'enablepause',
        kind: 2,
        detail: 'enablepause()',
        documentation: 'Enables the normal player pause again.',
    },
    {
        label: 'disablemap',
        kind: 2,
        detail: 'disablemap()',
        documentation: 'Disables the normal player map.',
    },
    {
        label: 'enablemap',
        kind: 2,
        detail: 'enablemap()',
        documentation: 'Enables the normal player map again.',
    },

    // Add more as needed
];
