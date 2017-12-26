import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test14 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка датчика освешености</h1>
                <p>
                    Для проверки датчика освящености необходимо зайти в настройки -> Экран и яркость. Уменьшить яркость до минимума, после этого поднести датчик авто якрости к истучнику освящение. Шкала яркости должна автоматически увеличиться, вместе с яркостью экрана.
                </p>
                <img src={require('../image/top_sensor/A4.png')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test15')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test14);