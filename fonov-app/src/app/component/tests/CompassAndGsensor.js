import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Title, Image, TestNav } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";


class CompassAndGsensor extends Component {

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
                <Title>Компас и G-sensor {currentModel}</Title>
                <Image src={require('../../assets/image/compas/IMG_1352.PNG')} />
                <Text>
                    Открыть приложение компас и поврашать телефон. При вращение телефона компас доллжен менять свое положение
                </Text>
                <Image src={require('../../assets/image/compas/IMG_1353.PNG')} />
                <Text>
                    Взмахом влево открыть уровень. По переворачивайте телефон, сесор должен работать корректно и плавно.
                </Text>
                <RatingCheck testN='CompassAndGsensor'>
                    Компас и G-sensor работают в {currentModel}?
                </RatingCheck>
                <TestNav testN='CompassAndGsensor'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompassAndGsensor);