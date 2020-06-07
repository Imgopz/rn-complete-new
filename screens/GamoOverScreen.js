import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';


import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton'
import Colors from '../constants/colors'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/original.png')} style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>You Phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> round to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        height: 300,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
})
export default GameOverScreen;