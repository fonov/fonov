import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import NextButton from '../elements/nextButton'
import { Actions } from 'react-native-router-flux'


export default class Test1 extends Component{

    constructor(props) {
        super(props);

        this.state = {
            images_links: [
                require('../image/test1/front.png'),
                require('../image/test1/Back.png'),
                require('../image/test1/Боковая_грань.png')
            ]
        };

    }

    render(){

        const { images_links } = this.state;

        return(
            <Content style={{paddingHorizontal: 10, paddingTop: 10}}>
                <Text>Извлечь телефон из чехла. Если iPhone имеет защитное стекло или пленку на задний или передней части телефона то ее необходимо удалить. Поднести телефон к источнику освящениею и внимательно осмотреть переднию, заднию и боковые грание на наличие царапин, потертостей, трещин, сколов.</Text>
                { images_links.map((img, i) => <Image
                    style={{marginVertical: 10}}
                    source={img}
                    key={`img_${i}`}
                />)}
                <NextButton onPress={() => Actions.Test2()}/>
            </Content>
        )
    }

}