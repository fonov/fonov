import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test17 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка Bluetooth</h1>
                <p>
                    Откройти настройки -> Bluetooth. Попробуйте найти bluetooth устройтво и подключиться к нему.
                </p>
                <img src={require('../image/settings/IMG_96988805C252-1.jpeg')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test18')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test17);