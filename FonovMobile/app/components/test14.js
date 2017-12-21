import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test14 extends Component{

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Откройти настройки -> Bluetooth. Попробуйте найти bluetooth устройтво и подключиться к нему.
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 350, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test14/IMG_96988805C252-1.jpeg')}
                />
                <NextButton onPress={() => Actions.Test15()}/>
            </Content>
        )
    }

}