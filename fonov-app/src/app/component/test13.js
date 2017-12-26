import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test13 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка входа для наушников и наушников</h1>
                <p>
                    Вставить наушники и попробывать поиграть звук. Если звук отсутсвует дело может быть либо в неисправном штекере для наушников или в наушниках. Возьмите другие наушники заведомо рабачии и повторите снова
                </p>
                <Button color="primary" block onClick={() => changeRoute('Test14')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test13);