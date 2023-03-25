import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QuestionFactory } from './factories/question-factory.js';
import { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import QuestionType from './class/question-type.js';
// import RangeSlider from 'react-native-range-slider';
// import Slider from '@react-native-community/slider';

const elemraaQuestions = QuestionFactory.elemraaQuestions;
const responses = Array(elemraaQuestions.length).fill(null);

export default function Forms() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = elemraaQuestions[currentQuestionIndex];
    const [userResponse, setUserResponse] = useState('');

    const handleNextQuestion = (answer) => {
        responses[currentQuestionIndex] = answer
        console.log(responses)
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        console.log(": "+ answer);
        setUserResponse('');
        // if (currentQuestionIndex < elemraaQuestions.length - 1) {
            
        // }
        // else
        // {
        //     console.log("End of ressources: " + responses)
        // }
    };

    const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    };

    // const handleAnswerChange = (value) => {
    //     // setUserResponse(value);
    //     console.log("Answer: " + value)
    //     handleNextQuestion(value);
    // };

    // const handleMCQAnswerChange = (index) => {
    //     const newResponse = [...responses];
    //     newResponse[currentQuestionIndex] = currentQuestion.answer.response[index];
    //     setResponses(newResponse);
    //     setUserResponse(currentQuestion.answer.response[index]);
    //   };

    return (
    <View style={styles.container}>

        {currentQuestionIndex == elemraaQuestions.length - 1 &&
            <Text> Thank you for your time and your reponse, here some tips for you following your answers ! Bye bye </Text>
        }

        {currentQuestionIndex < elemraaQuestions.length - 1 &&
            <Text>Question </Text>
        }
        
        <Text>{currentQuestion.text}</Text> 

        {currentQuestion.type === QuestionType.Text && (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setUserResponse}
                    value={userResponse}
                    placeholder='Type your answer here...'
                />
                <Button title="Save" onPress={() => handleNextQuestion(userResponse)} /*disabled={userResponse.length == 0}*/ />
            </View>
        )}

        {currentQuestion.type === QuestionType.MCQ && (
        <View>
            {currentQuestion.answer.response.map((choice, index) => (
            <Button
                key={index}
                title={choice}
                onPress={() => handleNextQuestion(choice)}
            />
            ))}
        </View>
        )}


        {currentQuestion.type === QuestionType.Boolean && (
            <View>
                <Button title="true" onPress={() => handleNextQuestion(true)} />
                <Button title="false" onPress={() => handleNextQuestion(false)} />
            </View>
        )}

        {/* {currentQuestion.type === QuestionType.Slider && (
            <View>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#FFFFFF"
                    value={0.5}
                    // onValueChange={this.handleValueChange}
                />
            </View>
        )}

        {currentQuestion.type === QuestionType.StepSlider && (
            <View>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#FFFFFF"
                    value={0.5}
                    // onValueChange={this.handleValueChange}
                />
            </View>
        )} */}


        
        <StatusBar style="auto" />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Previous" onPress={handlePreviousQuestion} disabled={currentQuestionIndex === 0} />
        {/* <Button title="Next" onPress={handleNextQuestion} disabled={currentQuestionIndex === elemraaQuestions.length - 1} /> */}
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