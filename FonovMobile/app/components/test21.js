import React, { Component } from 'react';
import {View, Text, Dimensions, Image} from 'react-native'
import { Content, Button, Grid, Col } from 'native-base'
import { Actions } from 'react-native-router-flux'
import NextButton from '../elements/nextButton'


export default class Test21 extends Component{

    render(){

        const { width } = Dimensions.get('window');

        return(
            <Content>
                <Text style={{margin: 10}}>
                    Проверка совпадение серийного номера с коробкой с серийным номером iPhone. Откройти настройки -> Об этом устройстве -> Серийный номер. Затем сраните серийный номер телефона с сериныйм номером на каробке. Если iPhone ниже 5 то так же достаньте слот для сим карты перевните его и сраните серийный номер с с телофона, с слоита сим карты и коробки. Если на каробке нет наклейки или сериныйный номера не сопадвют значит это не оригинал ьная коробка от телефона
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 200, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test21/box-sticker-iphone-serial-number.png')}
                />
                <Text style={{margin: 10}}>
                    Проверка наущников. Наушнки должны имееть эластичный кабель, приятный и не жесткий на ощупь. Соединительный стыки наушников должны быть идиально поддогнутые и гладкие. Ставьте наушнки и проиграйте песню. В наушниках должны отсутвовать постароние звуки. Сам звук должнем быть чистый без всяких премисей и шумов
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 200, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test21/EarPods1.jpg')}
                />
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 200, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test21/EarPods3.jpg')}
                />
                <Text style={{margin: 10}}>
                    Проверка кабеля зяриядки. Кабель должен быть шероховатый на ощупь и эластичный. Кабель должен иметь заводскую маркировку. Разьем Lightning  должен быть таким как на картинки
                </Text>
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 100, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test21/lightning_serial-china.png')}
                />
                <Image
                    resizeMode='contain'
                    style={{width: width-20, height: 100, marginLeft: 10, marginTop: 10}}
                    source={require('../image/test21/lightning_contacts.png')}
                />
                <Text style={{margin: 10}}>
                    Блок питания. Все стыки пластика должны быть идиальнро гладкими. Шрифт должен быть серого цвета и ровным.
                </Text>
                <Text style={{margin: 10, fontWeight: '700'}}>
                    Использование не оригинального кабеля питания или блока питания может сокранить срок службы вашего iPhone
                </Text>
                <NextButton onPress={() => Actions.TestResult()} finish={true}/>
            </Content>
        )
    }

}