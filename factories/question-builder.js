import { Question } from "./../class/question.js"
import { Answer } from "../class/answer";

export class QuestionBuilder {
    static buildQuestion(id, questionType, questionText, answerTexts) {
        const question = new Question(id, questionType, questionText, new Answer(id, answerTexts));
        return question;
    }
}
