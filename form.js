import React, { useState }from 'react';
import { StyleSheet, View } from 'react-native';
import { QuestionFactory } from './factories/question-factory.js';
import { StatusBar } from 'expo-status-bar';
import QuestionType from './class/question-type.js';

import QuestionHeader from './question-header.js';
import CheckBoxQuestion from './check-box-question.js';
import TextInputQuestion from './text-input-question.js';
import MCQQuestion from './mcq-question.js';
import Tips from './tips.js';
import Result from './result.js';
import Stats from './stats.js';
import ButtonPreviousQuestion from './button-previous.js';

const elemraaQuestions = QuestionFactory.elemraaQuestions;
const responses = Array(elemraaQuestions.length).fill(null);

export default function Forms() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = elemraaQuestions[currentQuestionIndex];
    const [userResponse, setUserResponse] = useState('');

    const handleNextQuestion = ([id,answer]) => {
        responses[currentQuestionIndex] = [id, answer, elemraaQuestions[currentQuestionIndex].category]
        console.log(responses)
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserResponse('');
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const toggleDialog = () => {
        setVisibleDiag(!visibleDiag);
    };
    

    const [isCheck, setCheck] = useState(false);

    const [visibleDiag, setVisibleDiag] = useState(false);

    return (
        <View style={styles.container}>
            {currentQuestion.type != QuestionType.Checkbox && currentQuestionIndex !== elemraaQuestions.length - 1 && (
                <QuestionHeader 
                    question={currentQuestion}
                />
            )}

            {currentQuestion.type === QuestionType.Checkbox && (
                <CheckBoxQuestion
                    isChecked={isCheck}
                    setIsChecked={setCheck}
                    handleNextQuestion={handleNextQuestion}
                />
            )}

            {currentQuestion.type === QuestionType.Text && (
                <TextInputQuestion
                    userResponse={userResponse}
                    setUserResponse={setUserResponse}
                    handleNextQuestion={handleNextQuestion}
                />
            )}

            {currentQuestion.type === QuestionType.MCQ && (
                <MCQQuestion
                    question={currentQuestion}
                    handleNextQuestion={handleNextQuestion}
                />
            )}

            
            {currentQuestion.type === QuestionType.Tips && (
                <Tips
                    question={currentQuestion}
                    handleNextQuestion={handleNextQuestion}
                />
            )}

            {currentQuestion.type === QuestionType.Result && (
                <Result
                    handleNextQuestion={handleNextQuestion}
                />
            )}

            {currentQuestion.type === QuestionType.Stat && (
                <Stats
                    responses={responses}
                    visibleDiag={visibleDiag}
                    setVisibleDiag={setVisibleDiag}
                    toggleDialog={toggleDialog}
                />
            )}
            
            <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <ButtonPreviousQuestion
                currentQuestionIndex={currentQuestionIndex}
                elemraaQuestions={elemraaQuestions}
                handlePreviousQuestion={handlePreviousQuestion}
            />
        </View>
        </View>
    );    
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90
    }
});