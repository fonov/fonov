import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";


class Speaker extends Component {

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
                <Title>Проверка динамиков на {currentModel}</Title>
                <Image src={require('../../assets/image/звуки/step.png')}/>
                <Text>
                    Для проверки звука необходимо открыть настройки. Звонки и проиграть пару стандартных звуков
                </Text>
                <RatingCheck testN='Speaker'>
                    Динамики работают в {currentModel}?
                </RatingCheck>
                <TestNav testN='Speaker'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Speaker);
