import React, { Component } from 'react';
import {View, Text, Dimensions, Image} from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'
import NextButton from '../elements/nextButton'
import ScreenBrightness from "react-native-screen-brightness";


export default class Test17 extends Component{

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Вставьте сим карту. Телефон должнен сразу же найти сеть. Если телефон требует активации то активируйте его. Если при попытки активации появляться что телефон не сможет быть активирован с этой сим картой то скорее всего телефон привязан к определенному оператору и не может быть активирован с сим картой вашего оператора. Попробуйте соверщить вызов. При звонке проверьте работу разговорного динамика, микрофона, переключите телефон в режим громкой связи и проверть работу динамика. Так же во премя разговора с выключенной опцией громкая связь поднесите палец к датчику приблежения, экран должен потухнуть
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 350, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test17/iPhone_-_Звонок.png')}
                />
                <NextButton onPress={() => Actions.Test18()}/>
            </Content>
        )
    }

}