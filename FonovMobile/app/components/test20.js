import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'


export default class Test20 extends Component{

    render(){

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Зайти в настройки -> основные -> об устройстве -> серийный номер. Нажмите на серийны номер и выбирете скопировать. Затем перейдите на официальный сайт Apple для проверки гарантии
                </Text>
            </Content>
        )
    }

}