import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test22 extends Component {

    render() {

        return (
            <div>
                <h1>Проверка гарантии</h1>
                <p>
                    Зайти в настройки -> основные -> об устройстве -> серийный номер. Нажмите на серийны номер и выбирете скопировать. Затем перейдите на официальный сайт Apple для проверки гарантии
                </p>
                <Button color="success" block target="_blank" href='https://checkcoverage.apple.com'>Проверить гарантию</Button>
                <TestNav testN={22}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test22);