import { Party } from '../models/party';
import { MockUsers } from './mockUsers';
import { MockWorlds } from './mockWorlds';
import { MockSheets } from './mockSheets';

export const MockParties : Party[] = [
    {
        id      : 1,
        name    : 'Network',
        world   : MockWorlds[0],
        users   : [
            MockUsers[0], 
            MockUsers[1], 
            MockUsers[2], 
            MockUsers[3]
        ],
        gm      : MockUsers[0],
        sheet   : MockSheets[0],
    },
    {
        id      : 2,
        name    : 'Lunas happiness',
        world   : MockWorlds[0],
        users   : [
            MockUsers[0], 
            MockUsers[1], 
            MockUsers[3], 
        ],
        gm      : MockUsers[1],
        sheet   : MockSheets[0],
    },
    {
        id      : 3,
        name    : 'Wyrmslayers',
        world   : MockWorlds[0],
        users   : [
            MockUsers[0], 
            MockUsers[1], 
            MockUsers[3],
        ],
        gm      : MockUsers[0],
        sheet   : MockSheets[0],
    },
    {
        id      : 4,
        name    : 'Ultimate dungeon conquers',
        world   : MockWorlds[1],
        users   : [
            MockUsers[0], 
            MockUsers[1], 
            MockUsers[3],
        ],
        gm      : MockUsers[0],
        sheet   : MockSheets[1],
    },
]