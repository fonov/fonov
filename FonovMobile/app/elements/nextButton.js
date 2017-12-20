import React, { Component } from 'react';
import { Button, Text } from 'native-base'


export default class NextButton extends Component{

    render(){

        const { onPress } = this.props;

        return(
            <Button block style={{margin: 10}} onPress={onPress}>
                <Text>Далее</Text>
            </Button>
        )
    }

}