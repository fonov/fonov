import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'
import NextButton from '../elements/nextButton'


export default class Test19 extends Component{

    render(){

        return(
            <Content>
                <Text  style={{margin: 10}}>
                    Здесь должен выдан состояние батарии и информация о том что сейчас iPhone имеет пониженные использование процессора
                </Text>
                <NextButton onPress={() => Actions.Test20()}/>
            </Content>
        )
    }

}