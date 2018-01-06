import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";


class Flash extends Component {

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
                <Title>Проверка вспышки {currentModel}</Title>
                <Image src={require('../../assets/image/controlPanel/fl.png')} />
                <Text>
                    Откройти центр управления взмахом с низу в верх. Нажмите на клавишу фанарик и проверьте работу светадиода.
                </Text>
                <RatingCheck testN='Flash'>
                    Вспышка работает в {currentModel}?
                </RatingCheck>
                <TestNav testN='Flash'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
