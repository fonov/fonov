import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, Text, TestNav, Title } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";


class WiFi extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка WiFi в {currentModel}</Title>
                <Image src={require('../../assets/image/wifi/IMG_1359.PNG')} />
                <Text>
                    Откройти настройки -> Wi-Fi. Попробуйте подключиться к wifi сети. Если рядом нет доступных wifi точек то попробуйте создать точку доступа на своем смартфоне
                </Text>
                <RatingCheck testN='WiFi'>
                    Wifi работают в {currentModel}?
                </RatingCheck>
                <TestNav testN='WiFi'/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentModel: state.currentModel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WiFi);