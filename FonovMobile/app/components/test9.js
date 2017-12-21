import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test9 extends Component{

    openSetting() {
        Linking.openURL('app-settings:')
    }

    render(){

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Для проверки звука необходимо открыть настройки. Звуков и проиграть пару стандартных звуков
                </Text>
                <Button block style={{margin: 10}} success onPress={() => this.openSetting()}>
                    <Text>Перейти в настройки</Text>
                </Button>
                <NextButton onPress={() => Actions.Test10()}/>
            </Content>
        )
    }

}