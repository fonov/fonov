import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test12 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка камеры</h1>
                <p>
                    Откройти центр управление взмахом с низу вверх. Нажмити на клавишу камеру. Проверьте изображение с фронтальной и передней камерой. Изображение должно быть чистое и без размытия
                </p>
                <TestNav testN={12}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test12);