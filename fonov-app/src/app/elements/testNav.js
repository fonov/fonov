import React, { Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";
import { ADD_ROUTE, POP_ROUTE } from "../actions/route";
import FontAwesome from 'react-fontawesome'


class TestNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            maxTest: 24,
            minTest: 2
        }
    }

    next(nextView) {

        const { rating = null, ADD_ROUTE, testN } = this.props;

        if (rating) {
            ADD_ROUTE(rating.routeName, {title: rating.title, testN: testN, nextView})
        } else {
            ADD_ROUTE(nextView)
        }

    }

    render() {

        const { maxTest, minTest } = this.state,
            { testN, POP_ROUTE } = this.props;

        return (
            <div style={{marginTop: 20}}>
                { testN === minTest ? (
                    <Button color="primary" block onClick={() => this.next(`Test${testN+1}`)}>
                        Далле <FontAwesome name='chevron-right' />
                    </Button>
                ) : testN === maxTest ? (
                    <Button color="primary" block onClick={() => this.next('TestResult')}>Завершить тест</Button>
                ) : (
                    <div>
                        <div className='row'>
                            <div className='col'>
                                <Button color="primary" block onClick={() => POP_ROUTE()}>
                                    <FontAwesome name='chevron-left' /> Назад
                                </Button>
                            </div>
                            <div className='col'>
                                <Button color="primary" block onClick={() => this.next(`Test${testN+1}`)}>
                                    Далее <FontAwesome name='chevron-right' />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        ADD_ROUTE: (route, props = null) => dispatch(ADD_ROUTE(route, props)),
        POP_ROUTE: () => dispatch(POP_ROUTE())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestNav);