import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Content, List, ListItem } from 'native-base'


export default class ForTest extends Component{

    render(){

        return(
            <Content style={{padding: 10}}>
                <List>
                    <ListItem>
                        <Text>Срепка</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Разетка/повербанк/автозарядка</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Сматфон с фонариком и возможность раздать Wi-fi</Text>
                    </ListItem>
                </List>
            </Content>
        )
    }

}