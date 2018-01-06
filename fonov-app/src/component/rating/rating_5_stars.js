import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardHeader, CardSubtitle } from 'reactstrap';
import { connect } from 'react-redux'
import { add_rating } from '../../actions/rating'
import FontAwesome from 'react-fontawesome'


const starStyle = {
    fontSize: '7vmin',
    color: 'gold',
    textAlign: 'center'
};


class Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startPosition: -1
        }

    }

    componentWillMount() {

        const { initStars } = this.props;

        this.setState({startPosition: initStars-1})
    }

    stars(){

        const { countStars, onChange } = this.props,
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
                            onChange(i+1)
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
            firstStars: 0,
            secondStars: 0
        }

    }

    componentWillMount() {

        const { rating, testN } = this.props;

        if (typeof rating[testN] !== 'undefined') {
            this.setState({
                firstStars: rating[testN].firstStars,
                secondStars: rating[testN].secondStars
            })
        }
    }

    saveRating(key, i) {

        const { firstStars, secondStars } = this.state,
            { add_rating, testN } = this.props;

        this.setState({[key]: i});

        add_rating(testN, Object.assign({firstStars, secondStars}, {[key]: i}));
    }

    render() {

        const { children } = this.props,
            { firstStars, secondStars } = this.state;

        return (
            <div style={{marginTop: 10, marginBottom: 10}}>
                <Card className='bg-light'>
                    <CardHeader>{children}</CardHeader>
                    <CardBody>
                        <CardSubtitle>Заявленное состояние</CardSubtitle>
                        <Stars
                            countStars={5}
                            initStars={firstStars}
                            onChange={i => this.saveRating('firstStars', i)}
                        />
                        <CardSubtitle>Реальное состояние</CardSubtitle>
                        <Stars
                            countStars={5}
                            initStars={secondStars}
                            onChange={i => this.saveRating('secondStars', i)}
                        />
                    </CardBody>
                </Card>
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
        add_rating: (testN, data) => dispatch(add_rating(testN, data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating5Stars);
