import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test5 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка кнопок и вибрации</h1>
                <p>
                    Нажать не мение 5 раз на клавишу громкости вниз, в верх, клавиша блокировки и кнопка домой. Качалька клавиши бесшумного режима. При переключение в бесшумный режим iPhone должен плавно вибрировать
                </p>
                <img src={require('../image/buttons/iphone_front.png')} className="img-fluid"/>
                <TestNav testN={5}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test5);
