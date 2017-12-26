import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test18 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка микрофона</h1>
                <p>
                    Откройти приложение микрофон. Сделайте тестувую запись и прослушайте её. Запись не должна содержать постороних шумов и тресков. Голос должне быть чистым
                </p>
                <img src={require('../image/app/microphone.jpeg')} className="img-fluid"/>
                <TestNav testN={18}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test18);