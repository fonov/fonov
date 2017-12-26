import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test16 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка Wifi</h1>
                <p>
                    Откройти настройки -> Wi-Fi. Попробуйте подключиться к wifi сети. Если рядом нет доступных wifi точек то попробуйте создать точку доступа на своем смартфоне
                </p>
                <img src={require('../image/settings/iPhone-6-Wi-Fi-settings.png')} className="img-fluid"/>
                <TestNav testN={16}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test16);