import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";


class Sensor extends Component {

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
                <Title>Сенсор в {currentModel}</Title>
                <Image src={require('../../assets/image/screen/iPhone-screen-touch-600x402.png')}/>
                <Text>
                    Проводить польцем по всему экрану. Сенсор должен работать плавно и без задержок на всей площади экрана.
                </Text>
                <RatingCheck testN='Sensor'>
                    Сенсор работает корректно в {currentModel}?
                </RatingCheck>
                <TestNav testN='Sensor'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sensor);
