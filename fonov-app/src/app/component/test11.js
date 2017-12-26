import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test11 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Компас и G-sensor</h1>
                <p>
                    Открыть приложение компас и поврашать телефон. При вращение телефона компас доллжен менять свое положение
                </p>
                <img src={require('../image/compas/compass_iphone-azimut.jpg')} className="img-fluid"/>
                <p>
                    Взмахом влево открыть уровень. По переворачивайте телефон, сесор должен работать корректно и плавно.
                </p>
                <img src={require('../image/compas/cb883624c6bd41d6437f145aa1f2ef20.jpg')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test12')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test11);