import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";


class Charging extends Component {

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
                <Title>Проверка зарядки в {currentModel}</Title>
                <Image src={require('../../assets/image/charge/iphone_and_cable.png')} />
                <Text>
                    Подключите телефон к зарядки. Проверте плотно ли находиться разьм зарядки, отсутсвуют ли лифты. Телефон при подключние зарядки сразу же должен начать зарежаться
                </Text>
                <RatingCheck testN='Charging'>
                    Зарядка работают в {currentModel}?
                </RatingCheck>
                <TestNav testN='Charging'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Charging);