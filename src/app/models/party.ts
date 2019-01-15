import { World } from "./world";
import { User } from "./user";
import { Sheet } from "./sheet";

export class Party{

    id      : number;
    name    : string;
    world   : World;
    users   : Array<User>;
    gm      : User;         //gm = gamemaster
    sheet   : Sheet;
}