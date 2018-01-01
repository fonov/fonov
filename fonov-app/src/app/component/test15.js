import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../elements/index'
import {REPLACE_ROUTE} from "../actions/route";


class Test15 extends Component {

    componentWillMount() {

        const { REPLACE_ROUTE, currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
            case 'iPhone 5':
            case 'iPhone 5c':
                REPLACE_ROUTE('Test16')
        }
    }

    render() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone SE':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
                return (
                    <div>
                        <Title>Проверка Touch ID {currentModel}</Title>
                        <Image src={require('../image2/touchID/Group 2.png')} />
                        <Text>
                            Зайдите в настройки -> Touch ID и код-пароль. Нажмите Добавить палец и проверте работу Touch ID
                        </Text>
                        <TestNav testN={15}/>
                    </div>
                );
            case 'iPhone X':
                return (
                    <div>
                        <Title>Проверка Face ID {currentModel}</Title>
                        <Image src={require('../image2/faceID/Face ID.png')} />
                        <Text>
                            Для проведки Face ID необходимо зайти в настройки -> Face ID и код-пароль. Нажмите cканировать лицо и проверьте работу Face ID
                        </Text>
                        <TestNav testN={15}/>
                    </div>
                )
        }
    }

}

const mapStateToProps = state => {
    return {
        currentModel: state.currentModel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        REPLACE_ROUTE: route => dispatch(REPLACE_ROUTE(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test15);