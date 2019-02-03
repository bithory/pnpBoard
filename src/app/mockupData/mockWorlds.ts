import { World } from '../models/world';


export const MockWorlds : World[] = [
    {
        id      : 1, 
        name    : 'Werwolf the Apocalypse', 
        short   : 'WtA', 
        desc    : 'I am a WoD description', 
        edition : 'W20',
        author  : 1,
    },
    {
        id      : 2, 
        name    : 'Splittermond', 
        short   : '', 
        desc    : 'I am a Splittermond description',
        edition : '1st',
        author  : 1,
    },
    {
        id      : 3, 
        name    : 'Das schwarze Auge', 
        short   : 'DSA', 
        desc    : 'I am a DSA description',
        edition : '5th',
        author  : 1,
    },
    {
        id      : 4, 
        name    : 'Dungeons and Dragons', 
        short   : 'D&D', 
        desc    : 'I am a D&D description',
        edition : '5th',
        author  : 1,
    },
    {
        id      : 5, 
        name    : 'Shadowrun',
        short   : '',
        desc    : 'I am a Shadowrun description',
        edition : '3rd',
        author  : 1,
    },
];