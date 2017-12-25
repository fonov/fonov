import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test10 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка динамиков</h1>
                <p>
                    Для проверки звука необходимо открыть настройки. Звонки и проиграть пару стандартных звуков
                </p>
                <Button color="primary" block onClick={() => changeRoute('Test11')}>Далле</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test10);
