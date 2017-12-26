import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test18 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка микрофона</h1>
                <p>
                    Откройти приложение микрофон. Сделайте тестувую запись и прослушайте её. Запись не должна содержать постороних шумов и тресков. Голос должне быть чистым
                </p>
                <img src={require('../image/app/microphone.jpeg')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test19')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test18);