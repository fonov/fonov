import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, Text, TestNav, Title } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";


class Microphone extends Component {

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
                <Title>Проверка микрофона {currentModel}</Title>
                <Image src={require('../../assets/image/microphone/microphone.jpeg')} />
                <Text>
                    Откройти приложение микрофон. Сделайте тестувую запись.
                </Text>
                <Image src={require('../../assets/image/microphone/IMG_1361.PNG')} />
                <Text>
                    Прослушайте её. Запись не должна содержать постороних шумов и тресков. Голос должне быть чистым
                </Text>
                <RatingCheck testN='Microphone'>
                    Микрофона работают в {currentModel}?
                </RatingCheck>
                <TestNav testN='Microphone'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Microphone);