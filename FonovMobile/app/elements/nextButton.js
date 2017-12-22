import React, { Component } from 'react';
import { Button, Text } from 'native-base'


export default class NextButton extends Component{

    render(){

        const { onPress, finish = false } = this.props;

        return(
            <Button block style={{margin: 10}} onPress={onPress}>
                <Text>{finish ? 'Завершить' : 'Далее'}</Text>
            </Button>
        )
    }

}