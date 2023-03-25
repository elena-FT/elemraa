import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QuestionFactory } from './factories/question-factory.js';
import { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import QuestionType from './class/question-type.js';

export default function Forms() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const elemraaQuestions = QuestionFactory.elemraaQuestions;
    const responses = Array(elemraaQuestions.length).fill(null);

    const handleNextQuestion = () => {
    if (currentQuestionIndex < elemraaQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        responses[currentQuestionIndex] = userResponse
        console.log("Next: "+ userResponse)
    }
    };

    const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    };

    const handleBooleanAnswerChange = (value) => {
        setUserResponse(value);
    };

    const currentQuestion = elemraaQuestions[currentQuestionIndex];
    
    const [userResponse, setUserResponse] = useState('');

    return (
    <View style={styles.container}>
        <Text>Question</Text>
        
        <Text>{currentQuestion.text}</Text> 

        {currentQuestion.type === QuestionType.Text && (
        <TextInput
            style={styles.input}
            onChangeText={setUserResponse}
            value={userResponse}
            placeholder='Type your answer here...'
        />
        )}

        {currentQuestion.type === QuestionType.MCQ && (
        <View>
            {currentQuestion.answer.map((choice, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <CheckBox 
                value={currentQuestion.answer.includes(index)} 
                onValueChange={() => handleMCQAnswerChange(index)} 
                /> */}
                <Text>{choice}</Text>
            </View>
            ))}
        </View>
        )}


        {currentQuestion.type === QuestionType.Boolean && (
            <View>
                <Button title="true" onPress={() => handleBooleanAnswerChange(true)} />
                <Button title="false" onPress={() => handleBooleanAnswerChange(false)} />
            </View>
        )}
        
        <StatusBar style="auto" />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Previous" onPress={handlePreviousQuestion} disabled={currentQuestionIndex === 0} />
        <Button title="Next" onPress={handleNextQuestion} disabled={currentQuestionIndex === elemraaQuestions.length - 1} />
        </View>
    </View>
    );
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });