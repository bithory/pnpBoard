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
    author  : boolean;

    constructor (
        id      : number        = 0,
        name    : string        = '',
        text    : string        = '',
        userId  : number        = 0,
        partyId : number        = 0,
        read    : Array<User>   = [],
        tags    : Array<Tag>    = [],
        date    : string        = '',
        author  : boolean       = false
    ){

        this.id         = id;
        this.name       = name;
        this.text       = text;
        this.userId     = userId;
        this.partyId    = partyId;
        this.read       = read;
        this.tags       = tags;
        this.date       = date;
        this.author     = author;
    }
}