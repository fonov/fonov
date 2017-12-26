import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'

class Test9 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка вспышки</h1>
                <p>
                    Откройти центр управления взмахом с низу в верх. Нажмите на клавишу фанарик и проверьте работу светадиода.
                </p>
                <img src={require('../image/control_panel/flashlight.png')} className="img-fluid"/>
                <TestNav testN={9}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test9);
