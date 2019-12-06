export class User{

    id          : number;
    username    : string;
    pw          : string;
    email       : string;
    question    : string;
    answer      : string;

    constructor(
        id      : number = 0,
        username: string = '',
        pw      : string = '',
        email   : string = '',
        question: string = '',
        answer  : string = '',
    ){
        this.id         = id;
        this.username   = username;
        this.pw         = pw;
        this.email      = email;
        this.question   = question;
        this.answer     = answer;
    }
}