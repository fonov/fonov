import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";


class Warranty extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const {currentModel} = this.props;

        return (
            <div>
                <Title>Проверка гарантии</Title>
                <Image src={require('../../assets/image/waranty/Group 7.png')} />
                <Text>
                    Зайти в настройки -> основные -> об устройстве -> серийный номер. Нажмите на серийны номер и выбирете скопировать. Затем перейдите на официальный сайт Apple для проверки гарантии
                </Text>
                <Image src={require('../../assets/image/waranty/Group 8.png')} />
                <Text>
                    Затем перейдите на официальный сайт Apple для проверки гарантии
                </Text>
                <Button color="success" block target="_blank" href='https://checkcoverage.apple.com'>
                    Проверить гарантию
                </Button>
                <RatingCheck testN='Warranty'>
                    Данные о гарантии {currentModel} совпадают с заявленной информацией?
                </RatingCheck>
                <TestNav testN='Warranty'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Warranty);