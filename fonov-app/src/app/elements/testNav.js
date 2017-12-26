import React, { Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";
import ChangeRoute from "../actions/route";
import FontAwesome from 'react-fontawesome'


class TestNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countTest: 23
        }
    }

    render() {

        const { countTest } = this.state,
            { testN, changeRoute } = this.props;

        return (
            <div style={{marginTop: 20}}>
                { testN === 1 ? (
                    <Button color="primary" block onClick={() => changeRoute(`Test${testN+1}`)}>
                        Далле <FontAwesome name='chevron-right' />
                    </Button>
                ) : testN < countTest ? (
                    <div>
                        <div className='row'>
                            <div className='col'>
                                <Button color="primary" block onClick={() => changeRoute(`Test${testN-1}`)}>
                                    <FontAwesome name='chevron-left' /> Назад
                                </Button>
                            </div>
                            <div className='col'>
                                <Button color="primary" block onClick={() => changeRoute(`Test${testN+1}`)}>
                                    Далее <FontAwesome name='chevron-right' />
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Button color="primary" block onClick={() => changeRoute('TestResult')}>Завершить тест</Button>
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
        changeRoute: route => dispatch(ChangeRoute(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestNav);