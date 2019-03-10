import { Tag } from './tag';
import { User } from './User';

export class Note{

    id      : number;
    name    : string;
    text    : string;
    userId  : number;
    partyId : number;
    read    : Array<User>;
    tags    : Array<Tag>;
    date    : string;
}