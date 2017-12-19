import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'


export default class Home extends Component{

    render(){

        return(
            <Content style={{marginTop: 100, paddingHorizontal: 10}}>
                <Button block success onPress={() => Actions.Test1()}>
                    <Text>Начать тест</Text>
                </Button>
                <Button transparent full onPress={() => Actions.ForTest()}>
                    <Text>Что нужно для теста?</Text>
                </Button>
                <Button transparent full onPress={() => Actions.About()}>
                    <Text>О тесте</Text>
                </Button>
            </Content>
        )
    }

}