import React, { Component } from 'react';
import {View, Text, Dimensions, Image, Linking} from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test15 extends Component{

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Откройти приложение микрофон. Сделайте тестувую запись и прослушайте её. Запись не должна содержать постороних шумов и тресков. Голос должне быть чистым
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 350, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test15/IMG_AE273B00B30C-1.jpeg')}
                />
                <NextButton onPress={() => Actions.Test16()}/>
            </Content>
        )
    }

}