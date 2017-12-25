import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test9 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка вспышки</h1>
                <p>
                    Откройти центр управления взмахом с низу в верх. Нажмите на клавишу фанарик и проверьте работу светадиода.
                </p>
                <Button color="primary" block onClick={() => changeRoute('Test10')}>Далле</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test9);
