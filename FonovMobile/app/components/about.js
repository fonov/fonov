import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Content } from 'native-base'


export default class About extends Component{

    render(){

        return(
            <Content style={{padding: 10}}>
                <Text>
                    Тест для проверки iPhone перед покупкой. Тест направлен на выявление различного рода неисправностей и недостатков. После прохождение теста программа даст Вам рекомендации относительно покупки данного iPhone.
                </Text>
            </Content>
        )
    }

}