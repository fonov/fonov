import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Card, CardBody, CardTitle, CardHeader, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { REPLACE_ROUTE } from '../../actions/route'
import { add_rating } from '../../actions/rating'
import FontAwesome from 'react-fontawesome'


const starStyle = {
    fontSize: '5em',
    color: 'gold'
};


class Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startPosition: -1
        }

    }

    stars(){

        const { countStars, onClick } = this.props,
            { startPosition } = this.state;

        let array = [];
        for (let i = 0; i < countStars; i++) {
            array.push(
                <Col
                    key={`start_${i}`}
                    style={starStyle}
                >
                    <FontAwesome
                        name={startPosition >= i ? 'star' : 'star-o'}
                        onClick={() => {
                            this.setState({startPosition: i});
                            onClick(i+1)
                        }}
                    />
                </Col>
            )
        }
        return array
    }

    render() {

        return (
            <Row className='justify-content-center'>
                {this.stars()}
            </Row>
        )
    }
}


class Rating5Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            oneGroupStar: 0,
            twoGroupStar: 0
        }

    }

    render() {

        const { oneGroupStar, twoGroupStar } = this.state,
            { add_rating, currentProps, REPLACE_ROUTE } = this.props;

        return (
            <div>
                <Card className='bg-light'>
                    <CardHeader>{currentProps.ratingTitle}</CardHeader>
                    <CardBody>
                        <CardTitle>Заявленное состояние</CardTitle>
                        <Stars countStars={5} onClick={i => this.setState({oneGroupStar: i})} />
                        <CardTitle>Реальное состояние</CardTitle>
                        <Stars countStars={5} onClick={i => this.setState({twoGroupStar: i})} />
                        <Button
                            color="primary"
                            block
                            onClick={() => {
                                add_rating(currentProps.testN, '5start', {oneGroupStar, twoGroupStar});
                                REPLACE_ROUTE(currentProps.nextView)
                            }}
                        >
                            Завершить оценку
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentProps: state.route.currentProps
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add_rating: (testN, type, data) => dispatch(add_rating(testN, type, data)),
        REPLACE_ROUTE: (route, props = null) => dispatch(REPLACE_ROUTE(route, props))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating5Stars);
