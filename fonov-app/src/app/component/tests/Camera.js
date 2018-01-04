import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";


class Camera extends Component {

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
                <Title>Проверка камеры {currentModel}</Title>
                <Image src={require('../../assets/image/controlPanel/camera.png')}/>
                <Text>
                    Откройте центр управления, нажмите на клавишу камеру. Проверьте изображение с фронтальной и передней камерой. Изображение должно быть чистое и без размытия
                </Text>
                <RatingCheck testN='Camera'>
                    Камера работают в {currentModel}?
                </RatingCheck>
                <TestNav testN='Camera'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Camera);