import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test21 extends Component {

    render() {

        return (
            <div>
                <h1>Порт зарядки</h1>
                <p>
                    Подключите телефон к зарядки. Проверте плотно ли находиться разьм зарядки, отсутсвуют ли лифты. Телефон при подключние зарядки сразу же должен начать зарежаться
                </p>
                <img src={require('../image/charge/iPhone_-_Зарядка.png')} className="img-fluid"/>
                <TestNav testN={21}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test21);