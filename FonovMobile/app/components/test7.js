import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test7 extends Component{

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Откройти центр управления взмахом снизу вверх. Нажмите на клавишу фанарик и проверьте работу светадиода.
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 350, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test7/flashlight.png')}
                />
                <NextButton onPress={() => Actions.Test8()}/>
            </Content>
        )
    }

}