export class Question {
    constructor(id, text, type, answer=[]) {
        this.id = id;
        this.type = type;
        this.text = text;
        this.answer = answer;
    }
}