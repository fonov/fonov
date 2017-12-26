import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test17 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка Bluetooth</h1>
                <p>
                    Откройти настройки -> Bluetooth. Попробуйте найти bluetooth устройтво и подключиться к нему.
                </p>
                <img src={require('../image/settings/IMG_96988805C252-1.jpeg')} className="img-fluid"/>
                <TestNav testN={17}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Test17);