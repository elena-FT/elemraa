import React from 'react';
import { Button } from '@rneui/themed';

const ButtonPreviousQuestion = ({ currentQuestionIndex, elemraaQuestions, handlePreviousQuestion }) => {

  const displayButton = currentQuestionIndex !== 0 && currentQuestionIndex !== elemraaQuestions.length - 1;

  return (
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
        display: displayButton ? 'flex' : 'none',
        backgroundColor: '#6879D1',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        height: 46,
        marginTop: 25
      }}
      containerStyle={{
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      onPress={handlePreviousQuestion}
      disabled={currentQuestionIndex === 1}
    />
  );
};

export default ButtonPreviousQuestion;
