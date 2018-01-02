import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, Text, TestNav, Title } from '../elements/index'
import { RatingCheck } from './rating/index'


class Test16 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка Wifi в {currentModel}</Title>
                <Image src={require('../image/wifi/IMG_1359.PNG')} />
                <Text>
                    Откройти настройки -> Wi-Fi. Попробуйте подключиться к wifi сети. Если рядом нет доступных wifi точек то попробуйте создать точку доступа на своем смартфоне
                </Text>
                <RatingCheck
                    title={ `Wifi работают в ${currentModel}?`}
                    testN={16}
                />
                <TestNav testN={16}/>
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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Test16);