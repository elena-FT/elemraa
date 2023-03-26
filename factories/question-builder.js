import { Question } from "./../class/question.js"
import { Answer } from "../class/answer";
import CategoryType from "../class/category-type.js";

export class QuestionBuilder {
    static buildQuestion(id, questionType, questionText, answerTexts=[], category = CategoryType.Food) {
        const question = new Question(id, questionType, questionText, new Answer(id, answerTexts), category);
        return question;
    }
}
