import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QuestionFactory } from './factories/question-factory.js';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import QuestionType from './class/question-type.js';
import { Switch } from 'react-native';
import { Button, Icon, CheckBox, Badge } from '@rneui/themed';
import { Sliders } from './class/slider.js'
import PieChart from 'react-native-expo-pie-chart';
// import { PieChart } from 'react-native-svg-charts';
// import { Radar } from 'react-native-pathjs-charts'
// import { RadarChart } from 'react-native-charts-wrapper';
// import { BarChart } from 'react-native-chart-kit';


// export default function Forms() {
//     return QuestionForms()
// }


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

    const generateStats = () => {
        let stats = []
        let index = 0
        let color = ['#100348', '#752AB5', '#4160DA', 'orange', 'blue', 'red', 'yellow']
        responses.map((response) => {
            let lst = ["<25", "25-40", "40-60", "60<"];
            if (response != null && lst.indexOf(response[1]) !== 'string' && response[0] != 0)
            {
                console.log("ENTER IN IF")
                stats.push({
                    key: index,
                    count: response[0],
                    color: color[index],
                    string: response[2]
                })
                index++;
            }
        })
        return stats
    }

    const [isCheck, setCheck] = useState(false);

    return (
        
        <View style={styles.container}>
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              color='#6879D1'
            />
            
            <Text style={styles.h2}>Elemraa</Text>
            <Text style={styles.h3}>{currentQuestion.text}</Text>

            {currentQuestion.type === QuestionType.Checkbox && (
                <View>
                    <Text style={styles.text}>Ecoute toi, écoute ton coeur. </Text>
                    <CheckBox
                        center
                        title="Cette application a pour objectif la prévention et la sensibilisation des femmes et ne remplace pas l'avis d'un professionel de santé."
                        checked={isCheck}
                        onPress={() => setCheck(!isCheck)}
                        style={styles.button}
                    />
                    <Button title="Start survey" onPress={() => handleNextQuestion([0,0])} disabled={isCheck === false}
                    buttonStyle={{
                        backgroundColor: '#6879D1',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                        marginTop: 20,
                    }}/>
                </View>
            )}

            {currentQuestion.type === QuestionType.Text && (
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUserResponse}
                        value={userResponse}
                        placeholder='Type your answer here...'
                    />
                    <Button title="Ok" type="clear" titleStyle={{ color: '#6879D1' }} onPress={() => handleNextQuestion([0, userResponse])} /*disabled={userResponse.length == 0}*/ />
                </View>
            )}

            {currentQuestion.type === QuestionType.MCQ && (
                <View>
                    {currentQuestion.answer.response.map((choice, index) => (
                        <Button
                            title={choice}
                            radius={'md'}
                            size="lg"
                            key={index}
                            buttonStyle={{ backgroundColor: '#FFFFFF' }}
                            onPress={() => handleNextQuestion([currentQuestion.answer.response.indexOf(choice), choice])}
                            containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ color: 'black', marginHorizontal: 20 }}
                    />
                    ))}
                </View>
            )}

            
            {currentQuestion.type === QuestionType.Tips && (
                 <View>
                    <Text style={styles.text}>{currentQuestion.answer.response}</Text>
                    <Button title="Continue"
                    icon={{
                        name: 'arrow-right',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    iconContainerStyle={{ marginLeft: 10 }}
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: '#000',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                        height: 46,
                    }}
                    containerStyle={{
                        marginTop: 100,
                        width: 200,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        // marginBottom: 0
                    }}
                    onPress={() => handleNextQuestion([0,0])}/>
                </View>
            )}

            {currentQuestion.type === QuestionType.Result && (
                <View>
                    <Text style={styles.text}> Thank you for your time and your reponse, here some tips for you following your answers !</Text>
                    <Button title="See the result"
                    icon={{
                        name: 'arrow-right',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    iconContainerStyle={{ marginLeft: 10 }}
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: '#000',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                        height: 46,
                    }}
                    containerStyle={{
                        marginTop: 100,
                        width: 200,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        // marginBottom: 0
                    }}
                    onPress={() => handleNextQuestion([0,0])}/>
                </View>
            )}

            {currentQuestion.type === QuestionType.Stat && (
                <View style={styles.container}>
                    {console.log(generateStats())}
                    <PieChart style={{ marginTop: 0, padding: 0 }}
                        data={generateStats()}
                        length={240}
                    />
                    <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 20,
                        marginBottom: 20,
                        }}
                    >
                        {generateStats().map(stat => (
                            <Badge status={stat.category} />
                        ))}
                    </View>
                  
                    <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 20,
                        }}
                    >
                        {generateStats().map(stat => (
                            <Text style={{ color: stat.color, paddingVertical: 10 }}>{stat.string}</Text>
                        ))}

                    </View>
                </View>
            )}
            
            {/*currentQuestion.type === QuestionType.Slider && (
                <View>
                    <Sliders
                        // style={{width: 200, height: 40}}
                        // minimumValue={0}
                        // maximumValue={1}
                        // minimumTrackTintColor="#FFFFFF"
                        // maximumTrackTintColor="#000000"
                        // thumbTintColor="#FFFFFF"
                        // value={0.5}
                        // // onValueChange={this.handleValueChange}
                    />
                </View>
            )*/ }

            {/*currentQuestion.type === QuestionType.StepSlider && (
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
            <Button
                title="Revenir en arrière"
                icon={{
                    name: 'arrow-left',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                    display: currentQuestionIndex === 0 || currentQuestionIndex === elemraaQuestions.length - 1 ? 'none' : 'flex',
                    backgroundColor: '#6879D1',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                    height: 46,
                }}
                containerStyle={{
                    width: 200,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // marginBottom: 0
                }}
                onPress={handlePreviousQuestion} disabled={currentQuestionIndex === 1}
            />


            {/* <Button title="Previous" type="outline" onPress={handlePreviousQuestion} disabled={currentQuestionIndex === 0} /> */}
            {/* <Button title="Next" onPress={handleNextQuestion} disabled={currentQuestionIndex === elemraaQuestions.length - 1} /> */}
            </View>
        </View>
    );    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F7A6A3',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 20,
        // paddingVertical: 40,
        // marginBottom: 50
    },
    button: {
        backgroundColor: 'rgba(78, 116, 289, 1)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 150,
    },
    // buttonText: {
    //     color: 'gray',
    //     fontWeight: 'bold',
    //     fontSize: 16,
    // },
    // buttonContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginVertical: 10,
    // },
    // trueButton: {
    //     backgroundColor: 'green',
    //     marginRight: 10,
    // },
    // falseButton: {
    //     backgroundColor: 'red',
    // },
    input: {
        borderWidth: 1,
        borderColor: '#EBE8EF',
        backgroundColor: '#EBE8EF',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        width: 250,
    },
    h2: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '20',
        fontSize: 20,
        color: 'black'
    },
    h3: {
        fontFamily: 'Nunito-Bold',
        fontWeight: '500',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        margin: 20
    },
    text: {
        fontFamily: 'Nunito-Bold',
        fontWeight: '500',
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        margin: 20
    },
    check: {
        marginTop: 100,
    }
});