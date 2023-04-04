import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';

export default function MCQQuestion({question, handleNextQuestion}) {
    return (
        <View>
        {question.answer.response.map((choice, index) => (
            <Button
                title={choice}
                radius={'md'}
                size="lg"
                key={index}
                buttonStyle={{ backgroundColor: '#FFFFFF' }}
                onPress={() => handleNextQuestion([question.answer.response.indexOf(choice), choice])}
                containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
            }}
            titleStyle={{ color: 'black', marginHorizontal: 20 }}
        />
        ))}
    </View>
    );
}