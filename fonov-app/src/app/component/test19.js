import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'
import {REPLACE_ROUTE} from "../actions/route";


class Test19 extends Component {

    componentWillMount() {

        const { REPLACE_ROUTE } = this.props;

        REPLACE_ROUTE('Test20')
    }

    render() {

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
    return {
        currentModel: state.currentModel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        REPLACE_ROUTE: route => dispatch(REPLACE_ROUTE(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test19);