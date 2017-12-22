import React, { Component } from 'react';
import {View, Text, StatusBar, TouchableOpacity, Dimensions} from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'


export default class Colors extends Component{

    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            color: 'white'
        }

    }

    goSteps() {

        const { step } = this.state;

        let new_step = step+1,
            result = {step: new_step};

        if(new_step === 3) {
            Actions.pop()
        } else if (new_step === 1) {
            Object.assign(result, {color: 'black'});
        } else if (new_step === 2) {
            Object.assign(result, {color: 'blue'})
        }

        this.setState(result);
    }

    render(){

        const { color } = this.state,
            { width, height } = Dimensions.get('window');

        return(
            <Content style={{backgroundColor: color}}>
                <TouchableOpacity
                    onPress={() => this.goSteps()}
                    style={{width, height}}
                />
                <StatusBar hidden/>
            </Content>
        )

    }

}