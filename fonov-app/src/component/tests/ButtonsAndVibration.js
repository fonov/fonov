import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Text, Image, Title } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";


class ButtonsAndVibration extends Component {

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
                <Title>Проверка кнопок и вибрации {currentModel}</Title>
                <Image src={require('../../assets/image/кнопки/Кпокпи 2.png')}/>
                <Text>
                    Проверьте клавиши громкости и кнопку бесшумного режима. При переводе iPhone в бесшумных телефон должен завибрировать
                </Text>
                <Image src={require('../../assets/image/кнопки/Кпокпи.png')}/>
                <Text>Клавиша Домой</Text>
                <Image src={require('../../assets/image/кнопки/Кпокпи 3.png')}/>
                <Text>Клавиша блокировки</Text>
                <RatingCheck testN='ButtonsAndVibration'>
                    Работаю кнопки и вибрация в {currentModel}?
                </RatingCheck>
                <TestNav testN='ButtonsAndVibration'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsAndVibration);
