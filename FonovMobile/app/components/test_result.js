import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'


export default class TestResult extends Component{

    render(){

        return(
            <Content>
                <Text style={{margin: 10}}>Рекамендации после теста!</Text>
            </Content>
        )
    }

}