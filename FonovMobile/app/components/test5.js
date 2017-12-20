import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Linking } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test5 extends Component{

    openSetting() {
        Linking.openURL('app-settings:')
    }

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Телефон должен быть отвязан от аккатов iCloud и Apple id. В противном случае вы не сможете использовать телефон со своим аккаунтов и телефон может быть без возвратно заблокирован
                </Text>

                <Button block style={{margin: 10}} success onPress={() => this.openSetting()}>
                    <Text>Перейти в настройки</Text>
                </Button>

                <Image
                    resizeMode='contain'
                    source={require('../image/test5/IMG_0001.jpg')}
                    style={{width: width-20, height: 350, marginLeft: 10, marginTop: 10}}
                />
                <NextButton onPress={() => Actions.Test6()}/>
            </Content>
        )
    }

}