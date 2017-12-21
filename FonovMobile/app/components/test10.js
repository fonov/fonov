import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test10 extends Component{

    render(){

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Вставить наушники и попробывать поиграть звук. Если звук отсутсвует дело может быть либо в неисправном штекере для наушников или в наушниках. Возьмите другие наушники заведомо рабачии и повторите снова
                </Text>
                <Button block style={{margin: 10}} success onPress={() => this.openSetting()}>
                    <Text>Перейти в настройки</Text>
                </Button>
                <NextButton onPress={() => Actions.Test11()}/>
            </Content>
        )
    }

}