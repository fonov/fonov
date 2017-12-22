import React, { Component } from 'react';
import {View, Text, Linking, WebView, Dimensions} from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'
import NextButton from '../elements/nextButton'


export default class Test20 extends Component{

    render(){

        const { width, height } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Зайти в настройки -> основные -> об устройстве -> серийный номер. Нажмите на серийны номер и выбирете скопировать. Затем перейдите на официальный сайт Apple для проверки гарантии
                </Text>
                <Button block style={{margin: 10}} success onPress={() => Linking.openURL('app-settings:')}>
                    <Text>Перейти в настройки</Text>
                </Button>
                <WebView
                    source={{uri: 'https://checkcoverage.apple.com'}}
                    style={{margin: 20, width: width-40, height: height/2}}
                />
                <NextButton onPress={() => Actions.Test21()}/>
            </Content>
        )
    }

}