export class Question {
    constructor(id, text, type, answer=[], category) {
        this.id = id;
        this.type = type;
        this.text = text;
        this.answer = answer;
        this.category = category;
    }
}