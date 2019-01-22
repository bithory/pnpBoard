import { Tag } from './tag';

export class Note{

    id      : number;
    name    : string;
    text    : string;
    userId  : number;
    partyId : number;
    read    : Array<number>;
    tags    : Array<Tag>;
    date    : string;
}