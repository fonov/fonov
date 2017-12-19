import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native'
import { Content, Button, Grid, Col, Thumbnail } from 'native-base'
import { Actions } from 'react-native-router-flux'


export default class Test2 extends Component{

    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 7}}>
                    Ремонт бывает несколько типов. Профиссиональный ремонт в сервисном центре Apple или в авторизированных сервисных центров Но есть и другой тип ремонт, ремонт выполненный не профиссионалом и с использование не оригинальных запчастей. Если ремонт произведен профиссионаломи об этом очень сложно узнать но можно узнать был ли iPhone в не профиссионаьном ремонте. Признаков не качественного ремонта:
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width, height: 250}}
                    source={require('../image/test2/iPhone_-_Не_качественный_ремонт_2.png')}
                />
                <Text style={{textAlign: 'center'}}>Смещение фронтальной камеры.</Text>
                <Image
                    resizeMode='contain'
                    style={{width: width, height: 250}}
                    source={require('../image/test2/iPhone_-_Не_качественный_ремонт.png')}
                />
                <Text style={{textAlign: 'center'}}>Смещение передней камеры.</Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 250, marginLeft: 10}}
                    source={require('../image/test2/Люфт_дитсплея.jpg')}
                />
                <Text style={{textAlign: 'center'}}>Люфт экрана (равномерно понажимать по все кромки экрана)</Text>
                <Button block style={{margin: 10}} onPress={() => Actions.Test3()}>
                    <Text>Далее</Text>
                </Button>
            </Content>
        )
    }

}