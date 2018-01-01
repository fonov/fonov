import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Card, CardBody, CardTitle, CardHeader, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { REPLACE_ROUTE } from '../../actions/route'
import { add_rating } from '../../actions/rating'
import FontAwesome from 'react-fontawesome'


const checkStyle = {
    textAlign: 'center',
    fontSize: '8em'
};


class Check extends Component {

    constructor(props) {
        super(props);

        this.state = {
            check: null
        }

    }

    render() {

        const { check } = this.state,
            { onClick } = this.props;

        return (
            <Row className='justify-content-center'>
                <Col
                    style={{...checkStyle, color: check === true ? 'green' : 'black'}}
                    onClick={() => {
                        this.setState({check: true});
                        onClick(true)
                    }}
                >
                    <FontAwesome name={check === true ? 'check-circle' : 'check-circle-o'} />
                </Col>
                <Col
                    style={{...checkStyle, color: check === false ? 'green' : 'black'}}
                    onClick={() => {
                        this.setState({check: false});
                        onClick(false)
                    }}
                >
                    <FontAwesome name={check === false ? 'times-circle' : 'times-circle-o'} />
                </Col>
            </Row>
        )
    }
}


class RatingCheck extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstCheck: null,
            secondCheck: null
        }
    }

    validate() {

        const { firstCheck, secondCheck } = this.state;

        return new Promise((resolve, reject) => {
            if (firstCheck !== null && secondCheck !== null) {
                resolve()
            } else {
                alert('Оценка не завершена. Завершите оценку для отчета');
                reject()
            }
        })
    }

    render() {

        const { currentProps, add_rating, REPLACE_ROUTE } = this.props,
            { firstCheck, secondCheck } = this.state;

        return (
            <div>
                <Card className='bg-light'>
                    <CardHeader>{currentProps.title}</CardHeader>
                    <CardBody>
                        <CardTitle>Заявленное состояние</CardTitle>
                        <Check onClick={(check) => this.setState({firstCheck: check})}/>
                        <CardTitle>Реальное состояние</CardTitle>
                        <Check onClick={(check) => this.setState({secondCheck: check})}/>
                        <Button
                            color="primary"
                            block
                            onClick={() => {
                                this.validate()
                                    .then(() => {
                                        add_rating(currentProps.testN, {firstCheck, secondCheck});
                                        REPLACE_ROUTE(currentProps.nextView)
                                    })
                                    .catch(() => {

                                    })
                            }}
                        >
                            Завершить оценку
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentProps: state.route.currentProps
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add_rating: (testN, data) => dispatch(add_rating(testN, data)),
        REPLACE_ROUTE: (route, props = null) => dispatch(REPLACE_ROUTE(route, props))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingCheck);