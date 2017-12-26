import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test16 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка Wifi</h1>
                <p>
                    Откройти настройки -> Wi-Fi. Попробуйте подключиться к wifi сети. Если рядом нет доступных wifi точек то попробуйте создать точку доступа на своем смартфоне
                </p>
                <img src={require('../image/settings/iPhone-6-Wi-Fi-settings.png')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test17')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test16);