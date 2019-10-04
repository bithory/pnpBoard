import { Note } from '../models/note';
import { User } from '../models/user';
import { MockTags } from './mockTags';

export const MockNotes : Array<Note> = [
    {
        id      : 1,
        name    : 'note 1',
        text    : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean'
            + 'commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et'
            + 'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, '
            + 'ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis '
            + 'enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In '
            + 'enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis '
            + 'eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper '
            + 'nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat '
            + 'vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, '
            + 'feugiat a, tellus. ',
        userId  : 1,
        partyId : 1,
        read    : [],
        tags    : [MockTags[1], MockTags[2]],
        date    : '18.01.2019',
        author  : false,
    },
    {
        id      : 2,
        name    : 'note 2',
        text    : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean'
            + 'commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et'
            + 'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, '
            + 'ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis '
            + 'enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In '
            + 'enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis '
            + 'eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper '
            + 'nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat '
            + 'vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, '
            + 'feugiat a, tellus. ',
        userId  : 1,
        partyId : 1,
        read    : [],
        tags    : [MockTags[1], MockTags[2]],
        date    : '18.01.2019',
        author  : false,
    },
    {
        id      : 3,
        name    : 'note 3',
        text    : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean'
            + 'commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et'
            + 'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, '
            + 'ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis '
            + 'enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In '
            + 'enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis '
            + 'eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper '
            + 'nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat '
            + 'vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, '
            + 'feugiat a, tellus. ',
        userId  : 1,
        partyId : 2,
        read    : [],
        tags    : [MockTags[4], MockTags[5]],
        date    : '18.01.2019',
        author  : false,
    },
    {
        id      : 4,
        name    : 'note 4',
        text    : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean'
            + 'commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et'
            + 'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, '
            + 'ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis '
            + 'enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In '
            + 'enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis '
            + 'eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper '
            + 'nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat '
            + 'vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, '
            + 'feugiat a, tellus. ',
        userId  : 1,
        partyId : 2,
        read    : [],
        tags    : [MockTags[4], MockTags[5]],
        date    : '18.01.2019',
        author  : false,
    },
    {
        id      : 5,
        name    : 'note 5',
        text    : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean'
            + 'commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et'
            + 'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, '
            + 'ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis '
            + 'enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In '
            + 'enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis '
            + 'eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper '
            + 'nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat '
            + 'vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, '
            + 'feugiat a, tellus. ',
        userId  : 1,
        partyId : 1,
        read    : [],
        tags    : [MockTags[1], MockTags[2]],
        date    : '18.01.2019',
        author  : false 
    },
]