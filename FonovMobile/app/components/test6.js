import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test6 extends Component{

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Нажать не мение 5 раз на клавишу громкости вниз, в верх, клавиша блокировки и кнопка домой. Качалька клавиши бесшумного режима. При переключение в бесшумный режим iphone должен плавно вибрировать
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 350, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test6/iphone_front.png')}
                />
                <NextButton onPress={() => Actions.Test7()}/>
            </Content>
        )
    }

}