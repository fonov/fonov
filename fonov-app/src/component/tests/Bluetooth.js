import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, Text, TestNav, Title } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";


class Bluetooth extends Component {

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
                <Title>Проверка Bluetooth в {currentModel}</Title>
                <Image src={require('../../assets/image/BT/IMG_1360.PNG')}/>
                <Text>
                    Откройти настройки -> Bluetooth. Попробуйте найти Bluetooth устройтво и подключиться к нему.
                </Text>
                <RatingCheck testN='Bluetooth'>
                    Bluetooth работают в {currentModel}?
                </RatingCheck>
                <TestNav testN='Bluetooth'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Bluetooth);