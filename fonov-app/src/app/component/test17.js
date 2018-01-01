import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { Image, Text, TestNav, Title } from '../elements/index'


class Test17 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка Bluetooth {currentModel}</Title>
                <Image src={require('../image/BT/IMG_1360.PNG')}/>
                <Text>
                    Откройти настройки -> Bluetooth. Попробуйте найти bluetooth устройтво и подключиться к нему.
                </Text>
                <TestNav testN={17}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test17);