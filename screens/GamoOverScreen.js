import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';


import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/original.png')} style={styles.image} resizeMode='cover' />
            </View>
            <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onRestart} />
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
    imageContainer:{
        borderRadius: 150,
        height: 300,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        overflow: 'hidden',
        marginVertical: 30
    }
})
export default GameOverScreen;