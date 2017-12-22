import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'
import NextButton from '../elements/nextButton'
import ScreenBrightness from 'react-native-screen-brightness';


export default class Test16 extends Component{


    render(){

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Данный тест направлен для выевление дифектов экрана. Включите максимальную яркость дисплея и под разными углами осмотрите экран. На экране должны отсутсвовать битые пиксили и экран должне четко передовать цвет без желтизны и других оттенков.
                </Text>
                <Button block style={{margin: 10}} success onPress={() => {
                    ScreenBrightness.setBrightness(1);
                    Actions.Colors()
                }}>
                    <Text>Начать тест</Text>
                </Button>
                <NextButton onPress={() => Actions.Test17()}/>
            </Content>
        )
    }

}