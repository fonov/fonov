import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";


class HeadphoneJack extends Component {

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
                <Title>Проверка входа для наушников {currentModel}</Title>
                <Image src={require('../../assets/image/headpods/headpods.png')} />
                <Text>
                    Вставить наушники
                </Text>
                <Image src={require('../../assets/image/звуки/step.png')} />
                <Text>
                    Проиграть звук. Если звука нет, то попробуйте использоватеть заведомо рабочие наушники
                </Text>
                <RatingCheck testN='HeadphoneJack'>
                    Входа для наушников работают в {currentModel}?
                </RatingCheck>
                <TestNav testN='HeadphoneJack'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeadphoneJack);