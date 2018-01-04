import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Text, Image, Title } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";


class Touch3D extends Component {

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
                <Title>3D Touch в {currentModel}</Title>
                <Image src={require('../../assets/image/screen/3D-Touch-iPhone-6s.jpg')}/>
                <Text>
                    Для проверка 3D Touch необходимо сильно понажать на иконки. После этого должен открыться меню
                </Text>
                <RatingCheck testN='Touch3D'>
                    3D Touch работает в {currentModel}?
                </RatingCheck>
                <TestNav testN='Touch3D'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Touch3D);
