import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test13 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка входа для наушников и наушников</h1>
                <p>
                    Вставить наушники и попробывать поиграть звук. Если звук отсутсвует дело может быть либо в неисправном штекере для наушников или в наушниках. Возьмите другие наушники заведомо рабачии и повторите снова
                </p>
                <TestNav testN={13}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test13);