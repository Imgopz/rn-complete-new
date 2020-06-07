import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confimedOutput;

    if (confirmed) {
        confimedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You Selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number!</BodyText>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <MainButton onPress={resetInputHandler} color={Colors.accent}>
                                <AntDesign name='reload1' size={25} color='white' />
                            </MainButton>
                        </View>
                        <View style={styles.button}>
                            <MainButton onPress={confirmInputHandler} color={Colors.primary}>
                                <AntDesign name='check' size={25} color='white' />
                            </MainButton>
                        </View>
                    </View>
                </Card>
                {confimedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 95
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});
export default StartGameScreen;