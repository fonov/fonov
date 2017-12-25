import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test5 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка кнопок и вибрации</h1>
                <p>
                    Нажать не мение 5 раз на клавишу громкости вниз, в верх, клавиша блокировки и кнопка домой. Качалька клавиши бесшумного режима. При переключение в бесшумный режим iPhone должен плавно вибрировать
                </p>
                <img src={require('../image/buttons/iphone_front.png')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test6')}>Далле</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test5);
