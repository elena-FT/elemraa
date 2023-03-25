import QuestionType from "../class/question-type";
import { Question } from "../class/question.js"
import { QuestionBuilder } from "./question-builder";

export class QuestionFactory {
    static elemraaQuestions = [
        QuestionBuilder.buildQuestion(0, "Are you a man or a women?", QuestionType.Boolean, ["Man", "Woman"]),
        QuestionBuilder.buildQuestion(1, "What is your rank age?", QuestionType.MCQ, [">25", "26-30", "31-35", "36-40", "41-45", "46-50", "51-55", "<55"]),
        QuestionBuilder.buildQuestion(2, "what is your weight", QuestionType.Text),
        QuestionBuilder.buildQuestion(3, "what is your size?", QuestionType.Text),
        QuestionBuilder.buildQuestion(4, "Do you smoke?", QuestionType.Boolean, ["Yes", "No"]),
        QuestionBuilder.buildQuestion(5, "Do you drink?", QuestionType.MCQ, ["Never", "Sometimes", "Often", "Daily"]),
        QuestionBuilder.buildQuestion(6, "Do you have a family history?", QuestionType.Text),
        QuestionBuilder.buildQuestion(7, "Do you have migraines?", QuestionType.MCQ, ["Never", "Sometimes", "Often"]),
        QuestionBuilder.buildQuestion(8, "Are you diabetic", QuestionType.Boolean, ["Yes", "No"]),
        QuestionBuilder.buildQuestion(9, "Are you someones stressed?", QuestionType.MCQ, ["Never", "Sometimes", "Often"]),
        QuestionBuilder.buildQuestion(10, ""),

    ];
}