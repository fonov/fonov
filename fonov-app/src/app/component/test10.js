import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test10 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка динамиков</h1>
                <p>
                    Для проверки звука необходимо открыть настройки. Звонки и проиграть пару стандартных звуков
                </p>
                <img src={require('../image/control_panel/camera.png')} className="img-fluid"/>
                <TestNav testN={10}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test10);
