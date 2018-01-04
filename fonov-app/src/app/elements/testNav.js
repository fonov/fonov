import React, { Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";
import FontAwesome from 'react-fontawesome'
import {show_modal} from '../actions/modal'
import {APP_NAME} from '../constant/config'
import { push } from 'react-router-redux'
import SchemeOfTests from '../constant/schemeOfTests'
import URLS from '../constant/urls'


class TestNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            schemeOfTests: null
        }
    }

    componentWillMount() {

        const {currentModel} = this.props;

        this.setState({
            schemeOfTests: SchemeOfTests(currentModel)
        })
    }

    next() {

        const { rating, testN, show_modal, push } = this.props,
            {schemeOfTests} = this.state,
            nextIndex = schemeOfTests.indexOf(testN)+1;


        if (typeof rating[testN] !== 'undefined') {

            let keys = Object.keys(rating[testN]),
                data = rating[testN];

            if (keys.length === 1 || (keys.length === 2 && data[keys[0]] && data[keys[1]]))
                if (schemeOfTests.length === nextIndex) {
                    push(URLS.TestResult)
                } else {
                    push(URLS[schemeOfTests[nextIndex]])
                }
                return
        }

        return show_modal(APP_NAME, 'Оцените тест для формирования отчета');
    }

    render() {

        const { testN } = this.props,
            {schemeOfTests} = this.state;

        return (
            <div style={{marginTop: 20}}>
                <Button size="lg" color="primary" block onClick={() => this.next()}>
                    {testN === schemeOfTests[schemeOfTests.length-1] ? (
                        <span>
                            Завершить тест <FontAwesome name='flag-checkered' />
                        </span>) : (
                        <span>
                            Далее <FontAwesome name='chevron-right' />
                        </span>)
                    }
                </Button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        rating: state.rating,
        currentModel: state.currentModel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        show_modal: (title, text) => dispatch(show_modal(title, text)),
        push: path =>  dispatch(push(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestNav);