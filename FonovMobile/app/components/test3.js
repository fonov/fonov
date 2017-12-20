import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test3 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            images_path: [
                require('../image/test3/iphone-x-liquid-contact-indicator.png'),
                require('../image/test3/iphone8-liquid-contact-indicator.png'),
                require('../image/test3/iphone7-liquid-contact-indicator.png'),
                require('../image/test3/iphone_6-water_damage.png'),
                require('../image/test3/iphone_5-water_damage.png'),
                require('../image/test3/iphone_4_activated.png'),
                require('../image/test3/iphone3GS-water_damage.png'),
                require('../image/test3/iphone_original.png')
            ]
        }
    }

    render(){

        const { width } = Dimensions.get('window'),
            { images_path } = this.state;

        return(
            <Content>
                <Text  style={{margin: 10}}>
                    Влага оказывывает разрушительное влияние на компоненты iPhone. Что опредилить было ли попадание влаги в телефон нужно вынуть слот для сим карты и посмотреть на цвет индикатора. Если индикатор красного цвета значит телефон был подвержен попаданию влаги
                </Text>
                {
                    images_path.map((img, i) => <Image
                        resizeMode='contain'
                        style={{width: width-20, height: 100, marginLeft: 10, marginTop: 10}}
                        source={img}
                        key={`img_${i}`}
                    />)
                }
                <NextButton onPress={() => Actions.Test4()}/>
            </Content>
        )
    }

}