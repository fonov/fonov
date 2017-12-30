import React, { Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";
import { ADD_ROUTE, POP_ROUTE } from "../actions/route";
import FontAwesome from 'react-fontawesome'


class TestNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            maxTest: 23,
            minTest: 2
        }
    }

    render() {

        const { maxTest, minTest } = this.state,
            { testN, ADD_ROUTE, POP_ROUTE } = this.props;

        return (
            <div style={{marginTop: 20}}>
                { testN === minTest ? (
                    <Button color="primary" block onClick={() => ADD_ROUTE(`Test${testN+1}`)}>
                        Далле <FontAwesome name='chevron-right' />
                    </Button>
                ) : testN < maxTest-minTest+1 ? (
                    <div>
                        <div className='row'>
                            <div className='col'>
                                <Button color="primary" block onClick={() => POP_ROUTE()}>
                                    <FontAwesome name='chevron-left' /> Назад
                                </Button>
                            </div>
                            <div className='col'>
                                <Button color="primary" block onClick={() => ADD_ROUTE(`Test${testN+1}`)}>
                                    Далее <FontAwesome name='chevron-right' />
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Button color="primary" block onClick={() => ADD_ROUTE('TestResult')}>Завершить тест</Button>
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
        ADD_ROUTE: route => dispatch(ADD_ROUTE(route)),
        POP_ROUTE: () => dispatch(POP_ROUTE())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestNav);