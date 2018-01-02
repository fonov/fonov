import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { add_rating } from '../../actions/rating'
import FontAwesome from 'react-fontawesome'


const checkStyle = {
    textAlign: 'center',
    fontSize: '5em'
};

class RatingCheck extends Component {

    constructor(props) {
        super(props);

        this.state = {
            check: null
        }
    }

    componentWillMount() {

        const { rating, testN } = this.props;

        if (typeof rating[testN] !== 'undefined') {
            this.setState({check: rating[testN]['check']})
        }
    }

    saveRating(check) {

        const { testN, add_rating } = this.props;

        add_rating(testN, {check});
        this.setState({check})
    }

    render() {

        const { title } = this.props,
            { check } = this.state;

        return (
            <div>
                <Card className='bg-light'>
                    <CardHeader>{title}</CardHeader>
                    <CardBody>
                        <Row className='justify-content-center'>
                            <Col
                                style={{...checkStyle, color: check === true ? 'green' : 'black'}}
                                onClick={() => this.saveRating(true)}
                            >
                                <FontAwesome name={`check-circle${check === true ? '' : '-o'}`} />
                            </Col>
                            <Col
                                style={{...checkStyle, color: check === false ? 'green' : 'black'}}
                                onClick={() => this.saveRating(false)}
                            >
                                <FontAwesome name={`times-circle${check === false ? '' : '-o'}`} />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentProps: state.route.currentProps,
        rating: state.rating
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add_rating: (testN, data) => dispatch(add_rating(testN, data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingCheck);