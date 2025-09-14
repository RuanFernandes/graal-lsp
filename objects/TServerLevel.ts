// Completion items for TServerLevel

import { CompletionItem } from 'vscode-languageserver/node';

export const TServerLevelItems: CompletionItem[] = [
    // Level manipulation
    {
        label: 'triggeraction',
        kind: 2,
        detail: 'triggeraction(x,y,actionname,params)',
        documentation:
            "Triggers an 'onAction<action>()' function on the objects at (x,y).",
    },
    {
        label: 'scheduleevent',
        kind: 2,
        detail: 'scheduleevent(seconds,eventname,params,...)',
        documentation:
            "Schedules an event to call 'onEventname()' after the timer (in seconds) runs out.",
    },
    {
        label: 'hitobjects',
        kind: 2,
        detail: 'hitobjects(power,x,y)',
        documentation: 'Hurts all players/NPCs/baddies at the given position.',
    },
    {
        label: 'updateboard',
        kind: 2,
        detail: 'updateboard(x,y,width,height)',
        documentation: 'Makes level board modifications visible.',
    },
    {
        label: 'updateboard2',
        kind: 2,
        detail: 'updateboard2(x,y,width,height)',
        documentation:
            'Saves level board modifications if serveroption savelevels=true (server-side).',
    },
    {
        label: 'updateterrain',
        kind: 2,
        detail: 'updateterrain()',
        documentation: 'Makes level terrain modifications visible.',
    },
    {
        label: 'setz',
        kind: 2,
        detail: 'setz(x,y,width,height,a,b,c,d)',
        documentation:
            'Sets z of x,y with a,b,c,d as corner heights (use updateterrain to save).',
    },
    {
        label: 'putobject',
        kind: 2,
        detail: 'putobject(objectname,x,y)',
        documentation: 'Puts an object onto the board.',
    },
    {
        label: 'putbomb',
        kind: 2,
        detail: 'putbomb(power,x,y)',
        documentation: 'Puts a bomb on the board.',
    },
    {
        label: 'putexplosion',
        kind: 2,
        detail: 'putexplosion(radius,x,y)',
        documentation: 'Puts an explosion on the board.',
    },
    {
        label: 'putexplosion2',
        kind: 2,
        detail: 'putexplosion2(power,radius,x,y)',
        documentation:
            'Puts an explosion on the board (power=1 -> normal, 3 -> jolt bomb).',
    },
    {
        label: 'putleaps',
        kind: 2,
        detail: 'putleaps(leaptype,x,y)',
        documentation:
            "Produces an object 'explosion' (0-bush,1-swamp,2-stone,3-sign,4-ball,5-water).",
    },
    {
        label: 'puthorse',
        kind: 2,
        detail: 'puthorse(imgname,x,y)',
        documentation: 'Puts a horse (or boat) on the board.',
    },
    {
        label: 'setletters',
        kind: 2,
        detail: 'setletters(filename)',
        documentation:
            'Signs will be displayed using the specified image instead of letters.png.',
    },
    {
        label: 'setmap',
        kind: 2,
        detail: 'setmap(imgname,levelnamesfile,x,y)',
        documentation: 'Changes the map, the player will be placed on (x,y).',
    },
    {
        label: 'setminimap',
        kind: 2,
        detail: 'setminimap(imgname,levelnamesfile,x,y)',
        documentation:
            'Changes the minimap, the player will be placed on (x,y).',
    },
    {
        label: 'showstats',
        kind: 2,
        detail: 'showstats(bitflag)',
        documentation:
            'Shows/hides parts of the stats bar (1-ASD,2-icons,4-rupees,8-bombs,16-arrows,32-hearts,64-ap,128-mp,256-minimap,512-inv,1024-player).',
    },
    {
        label: 'noplayerkilling',
        kind: 2,
        detail: 'noplayerkilling()',
        documentation: 'Disables hurting with sword/NPC weapons.',
    },
    {
        label: 'removebomb',
        kind: 2,
        detail: 'removebomb(index)',
        documentation: 'Removes the bomb with the specified index.',
    },
    {
        label: 'removearrow',
        kind: 2,
        detail: 'removearrow(index)',
        documentation: 'Removes the arrow with the specified index.',
    },
    {
        label: 'removeitem',
        kind: 2,
        detail: 'removeitem(index)',
        documentation: 'Removes the item with the specified index.',
    },
    {
        label: 'removeexplo',
        kind: 2,
        detail: 'removeexplo(index)',
        documentation: 'Removes the explosion with the specified index.',
    },
    {
        label: 'removehorse',
        kind: 2,
        detail: 'removehorse(index)',
        documentation: 'Removes the horse with the specified index.',
    },
    {
        label: 'explodebomb',
        kind: 2,
        detail: 'explodebomb(index)',
        documentation: 'Explodes the bomb with the specified index.',
    },
    {
        label: 'reflectarrow',
        kind: 2,
        detail: 'reflectarrow(index)',
        documentation:
            'Reflects the arrow with the specified index (like a mirror shield).',
    },
    {
        label: 'addtiledef',
        kind: 2,
        detail: 'addtiledef(image,levelstart,type)',
        documentation:
            "Specifies the tiles images for all levels that start with 'levelstart' (0-standard type,1-new order).",
    },
    {
        label: 'addtiledef2',
        kind: 2,
        detail: 'addtiledef2(image,levelstart,x,y)',
        documentation: 'Replaces parts of the tiles image.',
    },
    {
        label: 'disableselectweapons',
        kind: 2,
        detail: 'disableselectweapons()',
        documentation: 'Disables the weapon select screen (Q-Menu).',
    },
    {
        label: 'enableselectweapons',
        kind: 2,
        detail: 'enableselectweapons()',
        documentation: 'Enables the weapon select screen again.',
    },
    {
        label: 'enablefeatures',
        kind: 2,
        detail: 'enablefeatures(bitflag)',
        documentation: 'Enables/disables game features.',
    },
    {
        label: 'setcursor',
        kind: 2,
        detail: 'setcursor(cursornumber)',
        documentation:
            'Changes the mouse icon to the corresponding windows set.',
    },
    {
        label: 'setcursor2',
        kind: 2,
        detail: 'setcursor2(filename)',
        documentation:
            'Changes the map scrolling icon in the offline level editor.',
    },
    // Baddy manipulation
    {
        label: 'putcomp',
        kind: 2,
        detail: 'putcomp(baddyname,x,y)',
        documentation: 'Puts a new baddy on the board.',
    },
    {
        label: 'putnewcomp',
        kind: 2,
        detail: 'putnewcomp(baddyname,x,y,imgname,power)',
        documentation:
            'Puts a baddy on the board (with the specified image and power).',
    },
    {
        label: 'hitcompu',
        kind: 2,
        detail: 'hitcompu(index,decrpower,fromx,fromy)',
        documentation: 'Hurts a baddy.',
    },
    {
        label: 'removecompus',
        kind: 2,
        detail: 'removecompus()',
        documentation: 'Removes all baddies.',
    },
];
