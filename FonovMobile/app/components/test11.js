import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'
import NextButton from '../elements/nextButton'
import ScreenBrightness from 'react-native-screen-brightness';


export default class Test11 extends Component{

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Уменьшить яркость до минимума, после этого поднести датчик авто якрости к истучнику освящение. Шкала яркости должна автоматически увеличиться, вместе с яркостью экрана.
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 150, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test11/A4.png')}
                />
                <Button block style={{margin: 10}} success onPress={() => ScreenBrightness.setBrightness(0)}>
                    <Text>Уменьшить яркость</Text>
                </Button>
                <NextButton onPress={() => Actions.Test12()}/>
            </Content>
        )
    }

}