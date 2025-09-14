// Completion items for built-in flags, events, variables, and functions

import { CompletionItem } from 'vscode-languageserver/node';

export const OtherCompletions: CompletionItem[] = [
    // Built-in Flags/Events
    {
        label: 'actiondoublemouse',
        kind: 14,
        documentation: 'Triggered when the player double clicks the NPC.',
    },
    {
        label: 'actionleftmouse',
        kind: 14,
        documentation: 'Triggered when the player left clicks the NPC.',
    },
    {
        label: 'actionmiddlemouse',
        kind: 14,
        documentation: 'Triggered when the player middle clicks the NPC.',
    },
    {
        label: 'actionrightmouse',
        kind: 14,
        documentation: 'Triggered when the player right clicks the NPC.',
    },
    {
        label: 'actionprojectile',
        kind: 14,
        documentation:
            'Triggered when the player has been hit with a projectile (client-side) or a projectile has landed (server-side).',
    },
    {
        label: 'actionsprojectile',
        kind: 14,
        documentation:
            'Triggered when a serverside projectile has landed (server-side).',
    },
    {
        label: 'actionprojectile2',
        kind: 14,
        documentation:
            'Triggered when a projectile has landed (client-side). (#p(0),#p(1) are x,y; #p(2),#p(3) are params)',
    },
    {
        label: 'actionpushed',
        kind: 14,
        documentation: 'Triggered when the player pushes the NPC.',
    },
    {
        label: 'actionpulled',
        kind: 14,
        documentation: 'Triggered when the player pulls the NPC.',
    },
    {
        label: 'canspin',
        kind: 14,
        documentation: 'The player has spin power (for sword).',
    },
    {
        label: 'carrying',
        kind: 14,
        documentation: 'The player carries something.',
    },
    {
        label: 'carriesblackstone',
        kind: 14,
        documentation: 'The player carries a blackstone.',
    },
    {
        label: 'carriesbush',
        kind: 14,
        documentation: 'The player carries a bush.',
    },
    {
        label: 'carriessign',
        kind: 14,
        documentation: 'The player carries a sign.',
    },
    {
        label: 'carriesstone',
        kind: 14,
        documentation: 'The player carries a stone.',
    },
    {
        label: 'carriesvase',
        kind: 14,
        documentation: 'The player carries a vase.',
    },
    {
        label: 'compsdead',
        kind: 14,
        documentation: 'There is no living baddy.',
    },
    { label: 'compusdied', kind: 14, documentation: 'All baddies died.' },
    {
        label: 'exploded',
        kind: 14,
        documentation: 'The NPC was exploded by a bomb.',
    },
    {
        label: 'firedonhorse',
        kind: 14,
        documentation: 'This NPC weapon is fired while riding on horse.',
    },
    {
        label: 'followsplayer',
        kind: 14,
        documentation: 'The NPC currently follows the player.',
    },
    {
        label: 'hasweapon',
        kind: 2,
        detail: 'hasweapon(name)',
        documentation: 'The player has the weapon specified with name.',
    },
    {
        label: 'isfocused',
        kind: 14,
        documentation: 'setfocus has been used (not focused on player).',
    },
    {
        label: 'isleader',
        kind: 14,
        documentation:
            'The player entered the level first (of all players in the same room).',
    },
    {
        label: 'isonmap',
        kind: 14,
        documentation: 'The player is on an outside level.',
    },
    {
        label: 'issparringzone',
        kind: 14,
        documentation: 'The player is in a sparring level.',
    },
    { label: 'isweapon', kind: 14, documentation: 'This NPC is a weapon.' },
    {
        label: 'keydown',
        kind: 2,
        detail: 'keydown(key)',
        documentation:
            'The specified key is pressed (0..10: up,left,down,right,S,A,D,M,tab,Q,P).',
    },
    {
        label: 'keydown2',
        kind: 2,
        detail: 'keydown2(keycode,ignorecase)',
        documentation:
            'Checks if a key has been pressed (ignorecase must be false to check for shift,ctrl,alt).',
    },
    {
        label: 'keypressed',
        kind: 14,
        documentation:
            'A key has been pressed (#p(0) is keycode,#p(1) is character) (event).',
    },
    {
        label: 'leftmousebutton',
        kind: 14,
        documentation: 'The left mouse button is pressed (flag).',
    },
    {
        label: 'lighteffectsenabled',
        kind: 14,
        documentation: 'The player can see light effects.',
    },
    {
        label: 'middlemousebutton',
        kind: 14,
        documentation: 'The middle mouse button is pressed (flag).',
    },
    {
        label: 'mousedown',
        kind: 14,
        documentation:
            'A mouse button has been pressed (event) (#p(0) also carries the strings left,right,double for those corresponding events).',
    },
    {
        label: 'mouseup',
        kind: 14,
        documentation: 'A mouse button has been released (event).',
    },
    {
        label: 'mousewheel',
        kind: 14,
        documentation: 'The mousewheel has been used (event).',
    },
    {
        label: 'nopkzone',
        kind: 14,
        documentation:
            "The player is in a level where you can't hurt other players.",
    },
    {
        label: 'onmapx',
        kind: 2,
        detail: 'onmapx(level)',
        documentation: 'X-position of the level on the current map.',
    },
    {
        label: 'onmapy',
        kind: 2,
        detail: 'onmapy(level)',
        documentation: 'Y-position of the level on the current map.',
    },
    {
        label: 'onwall',
        kind: 2,
        detail: 'onwall(x,y)',
        documentation: 'The specified field is blocked.',
    },
    {
        label: 'onwall2',
        kind: 2,
        detail: 'onwall2(x,y,width,height)',
        documentation: 'The specified field is blocked (server-side).',
    },
    {
        label: 'onwater',
        kind: 2,
        detail: 'onwater(x,y)',
        documentation: 'The specified field is water.',
    },
    {
        label: 'playeronline',
        kind: 14,
        documentation: 'The game is in online mode.',
    },
    {
        label: 'peltwithblackstone',
        kind: 14,
        documentation: 'The NPC was pelt with a blackstone.',
    },
    {
        label: 'peltwithbush',
        kind: 14,
        documentation: 'The NPC was pelt with a bush.',
    },
    {
        label: 'peltwithnpc',
        kind: 14,
        documentation: 'The NPC was pelt with another NPC.',
    },
    {
        label: 'peltwithsign',
        kind: 14,
        documentation: 'The NPC was pelt with a sign.',
    },
    {
        label: 'peltwithstone',
        kind: 14,
        documentation: 'The NPC was pelt with a stone.',
    },
    {
        label: 'peltwithvase',
        kind: 14,
        documentation: 'The NPC was pelt with a vase.',
    },
    {
        label: 'playerchats',
        kind: 14,
        documentation: 'The player says something.',
    },
    { label: 'playerdies', kind: 14, documentation: 'The player died.' },
    {
        label: 'playerendsreading',
        kind: 14,
        documentation: 'The player finished reading.',
    },
    {
        label: 'playerenters',
        kind: 14,
        documentation: 'The player enters the room.',
    },
    {
        label: 'playerhurt',
        kind: 14,
        documentation: 'The player has been hurt.',
    },
    {
        label: 'playerisfemale',
        kind: 14,
        documentation: 'The player is female.',
    },
    {
        label: 'playerismale',
        kind: 14,
        documentation: 'The player is male (specified in headsconfig.txt).',
    },
    {
        label: 'playerlaysitem',
        kind: 14,
        documentation: 'Somebody layed an item.',
    },
    {
        label: 'playermap',
        kind: 14,
        documentation: 'The player is reading the map.',
    },
    {
        label: 'playeronhorse',
        kind: 14,
        documentation: 'The player rides on a horse (or boat).',
    },
    { label: 'playerpause', kind: 14, documentation: 'The player is paused.' },
    {
        label: 'playerreading',
        kind: 14,
        documentation: 'The player is reading a sign.',
    },
    {
        label: 'playerswimming',
        kind: 14,
        documentation: 'The player is swimming.',
    },
    {
        label: 'playertouchsme',
        kind: 14,
        documentation: 'The player touches the NPC.',
    },
    {
        label: 'playertouchsother',
        kind: 14,
        documentation: 'The player touches another NPC.',
    },
    {
        label: 'playerattached',
        kind: 14,
        documentation: 'The player is attached to this NPC.',
    },
    {
        label: 'rightmousebutton',
        kind: 14,
        documentation: 'The right mouse button is down (flag).',
    },
    {
        label: 'shotbybaddy',
        kind: 14,
        documentation: 'The NPC was shot by a computer opponent.',
    },
    {
        label: 'shotbyplayer',
        kind: 14,
        documentation: 'The NPC was shot by the player.',
    },
    {
        label: 'startswith',
        kind: 2,
        detail: 'startswith(partstr,str)',
        documentation: 'Returns true if str starts with partstr.',
    },
    {
        label: 'strcontains',
        kind: 2,
        detail: 'strcontains(str,partstr)',
        documentation: 'Returns true if str contains partstr.',
    },
    {
        label: 'strequals',
        kind: 2,
        detail: 'strequals(str1,str2)',
        documentation: 'Returns true if str1 equals str2.',
    },
    {
        label: 'timeout',
        kind: 14,
        documentation: "The NPC's timeout counter runs to 0.",
    },
    { label: 'visible', kind: 14, documentation: 'The NPC is visible.' },
    {
        label: 'washit',
        kind: 14,
        documentation: 'The NPC was slayed with a sword or axe.',
    },
    { label: 'waspelt', kind: 14, documentation: 'The NPC was pelt.' },
    {
        label: 'wasshot',
        kind: 14,
        documentation: 'The NPC was shot with arrows.',
    },
    {
        label: 'wasthrown',
        kind: 14,
        documentation: 'The NPC was carried and then thrown.',
    },
    {
        label: 'weaponfired',
        kind: 14,
        documentation:
            "This NPC is used as weapon, 'D' (or joybutton1) is pressed.",
    },
    {
        label: 'weaponsenabled',
        kind: 14,
        documentation: 'The player weapons are enabled.',
    },
    // Built-in Variables / Functions (partial, add more as needed)
    {
        label: 'x',
        kind: 6,
        documentation: "The NPC's horizontal position (player.x for player).",
    },
    {
        label: 'y',
        kind: 6,
        documentation: "The NPC's vertical position (player.y for player).",
    },
    {
        label: 'rupees',
        kind: 6,
        documentation: "The NPC's rupees count (player.rupees for player).",
    },
    {
        label: 'bombs',
        kind: 6,
        documentation: "The NPC's bombs count (player.bombs for player).",
    },
    {
        label: 'darts',
        kind: 6,
        documentation: "The NPC's darts count (player.darts for player).",
    },
    {
        label: 'hearts',
        kind: 6,
        documentation: "The NPC's hearts count (player.hearts for player).",
    },
    {
        label: 'glovepower',
        kind: 6,
        documentation: "The NPC's glove power (player.glovepower for player).",
    },
    {
        label: 'swordpower',
        kind: 6,
        documentation: "The NPC's sword power (player.swordpower for player).",
    },
    {
        label: 'shieldpower',
        kind: 6,
        documentation:
            "The NPC's shield power (player.shieldpower for player).",
    },
    {
        label: 'dir',
        kind: 6,
        documentation:
            'The direction of the character (player.dir for player).',
    },
    {
        label: 'sprite',
        kind: 6,
        documentation:
            'The sprite of the character (player.sprite for player).',
    },
    {
        label: 'ap',
        kind: 6,
        documentation:
            'The alignment points of the character (player.ap for player).',
    },
    {
        label: 'timeout',
        kind: 6,
        documentation: "The NPC's current timeout counter (in seconds).",
    },
    {
        label: 'hurtdx',
        kind: 6,
        documentation:
            'Set when the player uses the sword/NPC weapon on the NPC.',
    },
    { label: 'hurtdy', kind: 6, documentation: '(x/y difference, >=-1, <=1).' },
    // ... (add more built-in functions/vars as needed) ...
];
