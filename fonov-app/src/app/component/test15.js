import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test15 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка Touch ID или Face ID</h1>
                <p>
                    Для проведки Touch ID или Face ID необходимо зайти в настройки -> Touch ID/Face ID и код-пароль. Нажмите Добавить палец и проверте работу Touch ID/ Сканировать лицо и проверьте работу Face ID
                </p>
                <Button color="primary" block onClick={() => changeRoute('Test16')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test15);