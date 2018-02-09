import React, { Component } from 'react';
import {connect} from "react-redux";


class TestBtnNext extends Component {

    render() {

        const {lastTest, testN, onClick} = this.props;

        /*
        TODO: UPDATE UI
        return(
            <Button big color="blue" onClick={onClick}>
                {testN === lastTest ? 'Завершить тест' : 'Далее'}
            </Button>
        )
        */
    }
}

const mapStateToProps = state => {
    return {
        lastTest: state.test.scheme[state.test.scheme.length-1],
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TestBtnNext);