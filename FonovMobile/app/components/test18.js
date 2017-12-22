import React, { Component } from 'react';
import {View, Text, Dimensions, Image} from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'
import NextButton from '../elements/nextButton'


export default class Test18 extends Component{

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Подключите телефон к зарядки. Проверте плотно ли находиться разьм зарядки, отсутсвуют ли лифты. Телефон при подключние зарядки сразу же должен начать зарежаться
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 250, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test18/iPhone_-_Зарядка.png')}
                />
                <NextButton onPress={() => Actions.Test19()}/>
            </Content>
        )
    }

}