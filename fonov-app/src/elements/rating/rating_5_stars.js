import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add_rating } from '../../actions/rating'
import FontAwesome from 'react-fontawesome'
import {nextTest} from '../../actions/main'
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import { Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap'


class Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startPosition: props.initStars-1
        }
    }

    stars(){

        const { countStars, onChange } = this.props,
            { startPosition } = this.state;

        let array = [];
        for (let i = 0; i < countStars; i++) {
            array.push(
                <Col key={i}>
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

        const {title} = this.props;

        return (
            <div>
                <p>{title}</p>
                <Row className='text-center stars'>
                    {this.stars()}
                </Row>
            </div>
        )
    }
}


class Rating5Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstStars: 0,
            secondStars: 0,
            picker_modal: false
        }
    }

    saveRating(key, i) {

        const { firstStars, secondStars } = this.state,
            { add_rating, testN, nextTest } = this.props,
            new_state = Object.assign({firstStars, secondStars}, {[key]: i});

        add_rating(testN, new_state);

        this.setState(new_state);

        if (new_state.firstStars !== 0 && new_state.secondStars !== 0)
            nextTest(testN)
    }

    toggle_picker_modal() {
        this.setState({
            picker_modal: !this.state.picker_modal
        })
    }

    render() {

        const { children, firstTitle, lastTitle, testN, lastTest, style = {}, _ } = this.props,
            { firstStars, secondStars, picker_modal } = this.state;

        return (
            <div style={style}>
                <Button outline color="primary" block className="my-4" onClick={() => this.toggle_picker_modal()}>
                    {testN === lastTest ? _('end_test') : _('further')}
                </Button>
                <Modal isOpen={picker_modal} toggle={() => this.toggle_picker_modal()}>
                    <ModalHeader toggle={() => this.toggle_picker_modal()}>
                        {children}
                    </ModalHeader>
                    <ModalBody>
                        <Stars
                            countStars={5}
                            initStars={firstStars}
                            onChange={i => this.saveRating('firstStars', i)}
                            title={firstTitle}
                        />
                        <Stars
                            countStars={5}
                            initStars={secondStars}
                            onChange={i => this.saveRating('secondStars', i)}
                            title={lastTitle}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        lastTest: state.test.scheme[state.test.scheme.length-1]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add_rating: (testN, data) => dispatch(add_rating(testN, data)),
        nextTest: testN => dispatch(nextTest(testN))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating5Stars);