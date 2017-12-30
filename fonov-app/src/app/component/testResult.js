import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { ADD_ROUTE } from '../actions/route'


class TestResult extends Component {

    render() {

        const { ADD_ROUTE } = this.props;

        return (
            <div>
                <h1>Результаты теста</h1>
                <Button color="primary" block onClick={() => ADD_ROUTE('Home')}>На главную</Button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        ADD_ROUTE: route => dispatch(ADD_ROUTE(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
