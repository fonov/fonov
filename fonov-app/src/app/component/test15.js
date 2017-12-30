import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test15 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка Touch ID или Face ID</h1>
                <p>
                    Для проведки Touch ID или Face ID необходимо зайти в настройки -> Touch ID/Face ID и код-пароль. Нажмите Добавить палец и проверте работу Touch ID/ Сканировать лицо и проверьте работу Face ID
                </p>
                <TestNav testN={15}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test15);