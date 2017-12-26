import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'
import TestNav from '../elements/testNav'


class Test20 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Вызов и Датчик приближения</h1>
                <p>
                    Вставьте сим карту. Телефон должнен сразу же найти сеть. Если телефон требует активации то активируйте его. Если при попытки активации появляться что телефон не сможет быть активирован с этой сим картой то скорее всего телефон привязан к определенному оператору и не может быть активирован с сим картой вашего оператора. Попробуйте соверщить вызов. При звонке проверьте работу разговорного динамика, микрофона, переключите телефон в режим громкой связи и проверть работу динамика. Так же во премя разговора с выключенной опцией громкая связь поднесите палец к датчику приблежения, экран должен потухнуть
                </p>
                <img src={require('../image/top_sensor/iPhone_-_Звонок.png')} className="img-fluid"/>
                <TestNav testN={20}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test20);