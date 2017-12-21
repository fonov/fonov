import React, { Component } from 'react';
import {View, Text, Linking } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test12 extends Component{

    render(){

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Для проведки Touch ID или Face ID необходимо зайти в настройки -> Touch ID/Face ID и код-пароль. Нажмите Добавить палец и проверте работу Touch ID/ Сканировать лицо и проверьте работу Face ID
                </Text>
                <Button block style={{margin: 10}} success onPress={() =>  Linking.openURL('app-settings:')}>
                    <Text>Перейти в настройки</Text>
                </Button>
                <NextButton onPress={() => Actions.Test13()}/>
            </Content>
        )
    }

}