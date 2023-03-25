import React, {useState} from 'react';
import { Button, CheckBox, Text, StyleSheet, View } from 'react-native';

let pressButton = false;

function WelcomePage() {

    const [isSelected, setSelection] = useState(false);

    const startSurvey = () => {
        if (isSelected) {
            pressButton = true;
        }
    }

    return (
        <View>
            <Text>Welcome to our wonderful survey that may save your life or those of your possible children one day !</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you agree to share your datas to be used in order to have a better understanding of women cardiovascular problem: {isSelected ? '👍' : '👎'}</Text>
            </View>
            <Button title="Start the survey" onPress={startSurvey} disabled={isSelected === false} />
        </View>
    )
}

export { pressButton, WelcomePage }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      margin: 8,
    },
});