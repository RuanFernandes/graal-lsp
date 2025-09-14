// Completion items for TServerNPC

import { CompletionItem } from 'vscode-languageserver/node';

export const TServerNPCItems: CompletionItem[] = [
    // Properties
    {
        label: 'ani',
        kind: 6,
        detail: 'string',
        documentation: 'Animation name of the NPC.',
    },
    {
        label: 'ap',
        kind: 6,
        detail: 'integer',
        documentation: 'Action points of the NPC.',
    },
    {
        label: 'arrows',
        kind: 6,
        detail: 'integer',
        documentation: 'Number of arrows the NPC has.',
    },
    {
        label: 'body',
        kind: 6,
        detail: 'string',
        documentation: 'Body name or type.',
    },
    {
        label: 'glovepower',
        kind: 6,
        detail: 'integer',
        documentation: 'Glove power of NPC.',
    },
    {
        label: 'hearts',
        kind: 6,
        detail: 'float',
        documentation: 'Hearts of NPC.',
    },
    {
        label: 'id',
        kind: 6,
        detail: 'integer (read only)',
        documentation: 'Unique ID of NPC.',
    },

    // Simple NPC manipulation
    {
        label: 'setimg',
        kind: 2,
        detail: 'setimg(filename)',
        documentation: "Changes the NPC's image.",
    },
    {
        label: 'setimgpart',
        kind: 2,
        detail: 'setimgpart(filename,x,y,width,height)',
        documentation:
            "Changes the NPC's image and only displays the rectangle (x,y,width,height) of it.",
    },
    {
        label: 'hide',
        kind: 2,
        detail: 'hide()',
        documentation: 'Hides the NPC.',
    },
    {
        label: 'show',
        kind: 2,
        detail: 'show()',
        documentation: 'Shows a hidden NPC.',
    },
    {
        label: 'dontblock',
        kind: 2,
        detail: 'dontblock()',
        documentation: 'Lets the NPC not block the player anymore.',
    },
    {
        label: 'drawoverplayer',
        kind: 2,
        detail: 'drawoverplayer()',
        documentation: 'Draws the NPC over the player.',
    },
    {
        label: 'drawunderplayer',
        kind: 2,
        detail: 'drawunderplayer()',
        documentation: 'Draws the NPC under the player.',
    },
    {
        label: 'drawaslight',
        kind: 2,
        detail: 'drawaslight()',
        documentation: 'Draws the NPC above day/night.',
    },
    {
        label: 'blockagain',
        kind: 2,
        detail: 'blockagain()',
        documentation: 'Turns off the three previous flags.',
    },
    {
        label: 'canbecarried',
        kind: 2,
        detail: 'canbecarried()',
        documentation: 'The NPC can now be lifted and carried by the player.',
    },
    {
        label: 'cannotbecarried',
        kind: 2,
        detail: 'cannotbecarried()',
        documentation: 'Turns off the previous flag.',
    },
    {
        label: 'canbepushed',
        kind: 2,
        detail: 'canbepushed()',
        documentation: 'The NPC can now be pushed by the player.',
    },
    {
        label: 'cannotbepushed',
        kind: 2,
        detail: 'cannotbepushed()',
        documentation: 'Turns off the previous flag.',
    },
    {
        label: 'canbepulled',
        kind: 2,
        detail: 'canbepulled()',
        documentation: 'The NPC can now be pulled by the player.',
    },
    {
        label: 'cannotbepulled',
        kind: 2,
        detail: 'cannotbepulled()',
        documentation: 'Turns off the previous flag.',
    },
    {
        label: 'canwarp',
        kind: 2,
        detail: 'canwarp()',
        documentation: 'Enables link warping (dnpc) (server-side).',
    },
    {
        label: 'canwarp2',
        kind: 2,
        detail: 'canwarp2()',
        documentation:
            'Enables link warping for overworld links (dnpc) (server-side).',
    },
    {
        label: 'showcharacter',
        kind: 2,
        detail: 'showcharacter()',
        documentation: 'Displays a player character instead of the NPC image.',
    },
    {
        label: 'noplayeronwall',
        kind: 6,
        detail: 'boolean',
        documentation:
            "Players aren't counted as a wall in onwall() or onwall2().",
    },
    {
        label: 'destroy',
        kind: 2,
        detail: 'destroy()',
        documentation: 'Deletes the NPC.',
    },
    {
        label: 'sleep',
        kind: 2,
        detail: 'sleep(seconds)',
        documentation: 'Pauses the script execution for the specified time.',
    },

    // Complex NPC operations
    {
        label: 'addguildmember',
        kind: 2,
        detail: 'addguildmember(guild,account,nick)',
        documentation: 'Adds player to a guild (server-side).',
    },
    {
        label: 'removeguildmember',
        kind: 2,
        detail: 'removeguildmember(guild,account,nick)',
        documentation: 'Removes a player from a guild (server-side).',
    },
    {
        label: 'removeguild',
        kind: 2,
        detail: 'removeguild(guild)',
        documentation: 'Deletes a guild (server-side).',
    },
    {
        label: 'move',
        kind: 2,
        detail: 'move(dx,dy,time,options)',
        documentation: 'Moves the NPC.',
    },
    {
        label: 'say',
        kind: 2,
        detail: 'say(signindex)',
        documentation: 'Displays signs.',
    },
    {
        label: 'say2',
        kind: 2,
        detail: 'say2(text)',
        documentation: 'Displays text as sign.',
    },
    {
        label: 'lay',
        kind: 2,
        detail: 'lay(itemname)',
        documentation: 'Lays an item.',
    },
    {
        label: 'take',
        kind: 2,
        detail: 'take(itemname)',
        documentation: 'Takes an item if available.',
    },
    {
        label: 'take2',
        kind: 2,
        detail: 'take2(index)',
        documentation: 'Takes the item with the specified index.',
    },
    {
        label: 'message',
        kind: 2,
        detail: 'message(text)',
        documentation: 'Displays a text message over the NPC.',
    },
    {
        label: 'echo',
        kind: 2,
        detail: 'echo(text)',
        documentation:
            "Outputs 'string' to the player's log (clientside) or in the NPC-Control (serverside).",
    },
    {
        label: 'timershow',
        kind: 2,
        detail: 'timershow()',
        documentation: "Lets the NPC's timeout be shown.",
    },
    {
        label: 'setcharani',
        kind: 2,
        detail: 'setcharani(ganifile,params)',
        documentation: 'Sets the animation for the NPC.',
    },
    {
        label: 'putnpc',
        kind: 2,
        detail: 'putnpc(imgname,scriptname,x,y)',
        documentation:
            'Creates a NPC, scriptname is the name of a textfile containing the NPC script.',
    },
    {
        label: 'putnpc2',
        kind: 2,
        detail: 'putnpc2(imgname,x,y,{script})',
        documentation:
            'Creates a NPC, script is specified within the brackets (server-side only).',
    },
    {
        label: 'callnpc',
        kind: 2,
        detail: 'callnpc(index,eventflag)',
        documentation: 'Calls the script of another NPC (not immediately).',
    },
    {
        label: 'callweapon',
        kind: 2,
        detail: 'callweapon(index,eventflag)',
        documentation:
            'Calls the script of a weapon (used together with the variable selectedweapon).',
    },
    {
        label: 'carryobject',
        kind: 2,
        detail: 'carryobject(carryobjectname)',
        documentation: 'The character carries an object.',
    },
    {
        label: 'throwcarry',
        kind: 2,
        detail: 'throwcarry()',
        documentation: 'Throws the carried object.',
    },
    {
        label: 'seteffect',
        kind: 2,
        detail: 'seteffect(red,green,blue,alpha)',
        documentation: 'Sets the day/night effect (default 0,0,0,0).',
    },
    {
        label: 'seteffectmode',
        kind: 2,
        detail: 'seteffectmode(mode)',
        documentation:
            'Changes mode of setcoloreffect of NPC (0 - lights color +, 1 - transparency alpha blending, 2 - holes color -).',
    },
    {
        label: 'setcoloreffect',
        kind: 2,
        detail: 'setcoloreffect(red,green,blue,alpha)',
        documentation:
            'Sets the color / alpha blending effect of the NPC (default 1,1,1,1).',
    },
    {
        label: 'setzoomeffect',
        kind: 2,
        detail: 'setzoomeffect(zoomfactor)',
        documentation: 'Sets the zoom factor (default 1).',
    },
    {
        label: 'showani',
        kind: 2,
        detail: 'showani(index,x,y,direction,animation,params)',
        documentation: 'Shows the animation at the given position.',
    },
    {
        label: 'showani2',
        kind: 2,
        detail: 'showani2(index,x,y,z,direction,animation,params)',
        documentation: 'Shows the animation at the given position.',
    },
    {
        label: 'showpoly',
        kind: 2,
        detail: 'showpoly(index,{x1,y1,x2,y2,...})',
        documentation:
            'Draws a polygon with given vertices, 4 params will draw a line.',
    },
    {
        label: 'showpoly2',
        kind: 2,
        detail: 'showpoly2(index,{x1,y1,z1,x2,y2,z2,...})',
        documentation:
            'Draws a polygon with given vertices, 6 params will draw a line.',
    },
    {
        label: 'showtext',
        kind: 2,
        detail: 'showtext(index,x,y,font,style,text)',
        documentation: 'Shows text at the given position with font and style.',
    },
    {
        label: 'showtext2',
        kind: 2,
        detail: 'showtext2(index,x,y,z,font,style,text)',
        documentation: 'Shows text at the given position with font and style.',
    },
    {
        label: 'showimg',
        kind: 2,
        detail: 'showimg(index,filename,x,y)',
        documentation: 'Shows an image at the given position.',
    },
    {
        label: 'showimg2',
        kind: 2,
        detail: 'showimg2(index,image,x,y,z)',
        documentation: 'Shows an image at the given position.',
    },
    {
        label: 'hideimg',
        kind: 2,
        detail: 'hideimg(index)',
        documentation:
            'Removes the image/text/polygon/etc. with the specified index.',
    },
    {
        label: 'hideimgs',
        kind: 2,
        detail: 'hideimgs(indexstart,indexend)',
        documentation:
            'Removes the given images/texts/polygons/etc. with the specified indexes as well as all indexes in between.',
    },
    {
        label: 'changeimgpart',
        kind: 2,
        detail: 'changeimgpart(index,x,y,width,height)',
        documentation: 'Changes the visible part of the showimg.',
    },
    {
        label: 'changeimgvis',
        kind: 2,
        detail: 'changeimgvis(index,drawingheight)',
        documentation: 'Changes the drawing height of the showimg (0,1,2,3,4).',
    },
    {
        label: 'changeimgcolors',
        kind: 2,
        detail: 'changeimgcolors(index,red,green,blue,alpha)',
        documentation:
            'Sets color / alpha blending for the showimg (default 1,1,1,1).',
    },
    {
        label: 'changeimgzoom',
        kind: 2,
        detail: 'changeimgzoom(index,zoomfactor)',
        documentation: 'Sets zoom factor for the showimg (default 1).',
    },
    {
        label: 'changeimgmode',
        kind: 2,
        detail: 'changeimgmode(index,mode)',
        documentation:
            'Changes color mode for showimg (see modes in seteffectmode).',
    },
    {
        label: 'sendtorc',
        kind: 2,
        detail: 'sendtorc(message)',
        documentation: 'Sends a message to rc (server-side).',
    },
    {
        label: 'sendtonc',
        kind: 2,
        detail: 'sendtonc(message)',
        documentation: 'Sends a message to nc (server-side).',
    },
    {
        label: 'sendpm',
        kind: 2,
        detail: 'sendpm(message)',
        documentation: 'Sends a pm to the current player (server-side).',
    },
    {
        label: 'sendrpgmessage',
        kind: 2,
        detail: 'sendrpgmessage(message)',
        documentation:
            'Sends a rpg message to the current player (server-side).',
    },
    {
        label: 'setshape',
        kind: 2,
        detail: 'setshape(type,width,height)',
        documentation:
            'Sets the shape of the npc: type=1 means rectangle (width,height in pixels).',
    },
    {
        label: 'setshape2',
        kind: 2,
        detail: 'setshape2(width,height,{tiletypes})',
        documentation: 'Sets the shape of the npc to a rectangle of tiles.',
    },
    {
        label: 'shoot',
        kind: 2,
        detail: 'shoot(x,y,z,angle,zangle,power,gani,ganiparams)',
        documentation: 'Shoots a projectile.',
    },
    {
        label: 'setshootparams',
        kind: 2,
        detail: 'setshootparams(params)',
        documentation: 'Sets params sent to called scripts with shoot.',
    },
    {
        label: 'shootarrow',
        kind: 2,
        detail: 'shootarrow(direction)',
        documentation: 'Shoots an arrow.',
    },
    {
        label: 'shootfireball',
        kind: 2,
        detail: 'shootfireball(direction)',
        documentation: 'Shoots a firewall.',
    },
    {
        label: 'shootfireblast',
        kind: 2,
        detail: 'shootfireblast(direction)',
        documentation: 'Shoots a fireblast.',
    },
    {
        label: 'shootnuke',
        kind: 2,
        detail: 'shootnuke(direction)',
        documentation: 'Shoots a nukeshot.',
    },
    {
        label: 'shootball',
        kind: 2,
        detail: 'shootball()',
        documentation: 'Shoots a ball directly to the player.',
    },
    {
        label: 'spyfire',
        kind: 2,
        detail: 'spyfire(length,power)',
        documentation: 'Shoots a horse fire with length and power.',
    },
    {
        label: 'join',
        kind: 2,
        detail: 'join(classname)',
        documentation: 'Adds script from classfile classname.',
    },
    {
        label: 'hitplayer',
        kind: 2,
        detail: 'hitplayer(index,halfhearts,fromx,fromy)',
        documentation: 'Hurts a player.',
    },
    {
        label: 'hitnpc',
        kind: 2,
        detail: 'hitnpc(index,halfhearts,fromx,fromy)',
        documentation: 'Hurts an npc (changes hearts, hurtdx, hurtdy).',
    },
    {
        label: 'takehorse',
        kind: 2,
        detail: 'takehorse(index)',
        documentation:
            'Takes the horse with the specified index (only works in combination with showcharacter).',
    },
    {
        label: 'warpto',
        kind: 2,
        detail: 'warpto(level,x,y)',
        documentation: 'Warps database npc to level at x,y.',
    },
    {
        label: 'wraptext',
        kind: 2,
        detail: 'wraptext(length,delims,text)',
        documentation:
            'Divides text into pieces of length with additional delimiters.',
    },
    {
        label: 'wraptext2',
        kind: 2,
        detail: 'wraptext2(width,zoom,delims,text)',
        documentation: 'Divides text into pieces of length in pixels.',
    },
];
