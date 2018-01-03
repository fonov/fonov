import React, { Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";
import { ADD_ROUTE, POP_ROUTE } from "../actions/route";
import FontAwesome from 'react-fontawesome'
import {show_modal} from '../actions/modal'


class TestNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            maxTest: 24,
            minTest: 2
        }
    }

    next(nextView) {

        const { rating, testN, ADD_ROUTE, show_modal } = this.props;

        if (typeof rating[testN] !== 'undefined') {

            let keys = Object.keys(rating[testN]),
                data = rating[testN];

            if (keys.length === 1 || (keys.length === 2 && data[keys[0]] && data[keys[1]]))
                return ADD_ROUTE(nextView)
        }

        return show_modal('Тест Fonov', 'Оцените тест для формирования отчета');
    }

    render() {

        const { maxTest, minTest } = this.state,
            { testN, POP_ROUTE } = this.props;

        return (
            <div style={{marginTop: 20}}>
                { testN === minTest ? (
                    <Button size="lg" color="primary" block onClick={() => this.next(`Test${testN+1}`)}>
                        Далее <FontAwesome name='chevron-right' />
                    </Button>
                ) : (
                    <div>
                        <div className='row'>
                            <div className='col'>
                                <Button size="lg" color="primary" block onClick={() => POP_ROUTE()}>
                                    <FontAwesome name='chevron-left' /> Назад
                                </Button>
                            </div>
                            <div className='col'>
                                {
                                    testN === maxTest ? (
                                        <Button size="lg" color="primary" block onClick={() => this.next('TestResult')}>
                                            Завершить тест <FontAwesome name='flag-checkered' />
                                        </Button>
                                    ) : (
                                        <Button size="lg" color="primary" block onClick={() => this.next(`Test${testN+1}`)}>
                                            Далее <FontAwesome name='chevron-right' />
                                        </Button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        rating: state.rating
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ADD_ROUTE: (route, props = null) => dispatch(ADD_ROUTE(route, props)),
        POP_ROUTE: () => dispatch(POP_ROUTE()),
        show_modal: (title, text) => dispatch(show_modal(title, text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestNav);