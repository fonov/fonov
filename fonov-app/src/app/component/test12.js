import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test12 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка камеры</h1>
                <p>
                    Откройти центр управление взмахом с низу вверх. Нажмити на клавишу камеру. Проверьте изображение с фронтальной и передней камерой. Изображение должно быть чистое и без размытия
                </p>
                <Button color="primary" block onClick={() => changeRoute('Test13')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test12);