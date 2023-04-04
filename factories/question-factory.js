import QuestionType from "../class/question-type";
import { Question } from "../class/question.js"
import { QuestionBuilder } from "./question-builder";

export class QuestionFactory {
    static elemraaQuestions = [
        QuestionBuilder.buildQuestion(0, "Prend le pouvoir sur ta santé !", QuestionType.Checkbox),
        QuestionBuilder.buildQuestion(1, "Quelle est votre tranche d'âge", QuestionType.MCQ, ["<25", "25-40", "40-60", "60<"]),
        QuestionBuilder.buildQuestion(2, "Quel est votre poids ?", QuestionType.Text),
        QuestionBuilder.buildQuestion(3, "Quel est votre taille (cm) ?", QuestionType.Text),
        QuestionBuilder.buildQuestion(4, "Est-ce que vous fumez ?", QuestionType.MCQ, ["Jamais", "Parfois", "Souvent", "Régulièrement"], "Tabac"),
        QuestionBuilder.buildQuestion(5, "Est-ce que vous consommez de l'alcool ?", QuestionType.MCQ, ["Jamais", "Parfois", "Souvent", "Régulièrement"], "Alcool"),
        QuestionBuilder.buildQuestion(6, "Avez-vous des antécédents familiaux cardiovasculaire ?", QuestionType.MCQ, ["Non", "Oui"], "Antécédents"),
        QuestionBuilder.buildQuestion(7, "Etes-vous diabétique ?", QuestionType.MCQ, ["Non", "Oui"], "Diabète"),
        QuestionBuilder.buildQuestion(8, "Est-ce que vous prenez la pillule contraceptive ?", QuestionType.MCQ, ["Non", "Oui"], "Hormonaux"),
        QuestionBuilder.buildQuestion(9, "Nombres de grossesses ?", QuestionType.MCQ, ["0-1", "2-3", "3<"], "Homonaux"),
        QuestionBuilder.buildQuestion(10, "Le savais- tu ?", QuestionType.Tips, ['Hey ! Savais-tu que les hormones dans le corps d\'une femme peuvent modifier son risque de maladies cardiovasculaires ? Il est important de prendre en compte ces changements hormonaux tout au long de sa vie pour une prévention optimale.'], ""),
        QuestionBuilder.buildQuestion(12, "Comment décririez-vous votrer flux menstruels ?", QuestionType.MCQ, ["Faible", "Modérée", "Abondante"], "Hormonaux"),
        QuestionBuilder.buildQuestion(13, "Merci !", QuestionType.Result),
        QuestionBuilder.buildQuestion(14, "", QuestionType.Stat),

    ];
}