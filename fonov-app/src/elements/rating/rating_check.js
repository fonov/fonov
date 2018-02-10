import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add_rating } from '../../actions/rating'
import {nextTest} from '../../actions/main'
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import { Row, Col, Button } from 'reactstrap';


class RatingCheck extends Component {

    saveRating(check) {

        const { testN, add_rating, nextTest } = this.props;

        add_rating(testN, {check});
        nextTest(testN);
    }

    render() {

        const { children, _, style = {}, revert_color = false } = this.props;

        return (
            <div style={style}>
                <p className="mt-4">
                    {children}
                </p>
                <Row className='my-4'>
                    <Col>
                        <Button outline color={revert_color ? "success" : "danger"} block onClick={() => this.saveRating(false)}>
                            {_('no')}
                        </Button>
                    </Col>
                    <Col>
                        <Button outline color={revert_color ? "danger" : "success"} block onClick={() => this.saveRating(true)}>
                            {_('yes')}
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add_rating: (testN, data) => dispatch(add_rating(testN, data)),
        nextTest: testN => dispatch(nextTest(testN))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingCheck);