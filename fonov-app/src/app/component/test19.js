import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'
import TestNav from '../elements/testNav'


class Test19 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка экрана</h1>
                <p>
                    Данный тест направлен для выевление дифектов экрана. Включите максимальную яркость дисплея и под разными углами осмотрите экран. На экране должны отсутсвовать битые пиксили и экран должне четко передовать цвет без желтизны и других оттенков. Для теста нужны 3 цвета. Белый, черный, синий
                </p>
                <TestNav testN={19}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        changeRoute: route => dispatch(ChangeRoute(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test19);