import React, { Component } from 'react';
import { connect } from 'react-redux'
import {replace, push} from 'react-router-redux';
import URLS from '../constant/urls'
import FontAwesome from 'react-fontawesome'
import {getActiveLanguage, getTranslate} from "react-localize-redux";
import {BasePage} from '../elements/index'
import {ListGroupItem, ListGroup, Badge, Alert, Button} from 'reactstrap'


class TestResult extends Component {

    constructor(props) {
        super(props);

        const {_, currentModel} = props;

        this.ratingTest = {
            About: {
                title: _('0_information_about_the_iph...'),
                pass: true,
                warning: _('1_information_about_phone_d...'),
                weight:-100
            },
            Appearance: {
                title: _('2_the_appearance_of_the_iph...'),
                weight:7.5
            },
            WaterSensor: {
                title: _('moisture_sensor'),
                pass: false,
                warning: _('4_we_do_not_recommend_buyin...'),
                weight:-100
            },
            ButtonsAndVibration: {
                title: _('buttons_and_vibration'),
                pass: true,
                warning: _('6_we_do_not_recommend_buyin...'),
                weight:-100
            },
            Sensor: {
                title: _('sensor'),
                pass: true,
                warning: _('8_we_do_not_recommend_buyin...'),
                weight:-100
            },
            Touch3D: {
                title: _('3d_touch'),
                pass: true,
                warning: _('10_we_do_not_recommend_buyin...'),
                weight:-100
            },
            iCloud: {
                title: _('icloud'),
                pass: true,
                warning: _('12_we_strongly_recommend_you...'),
                weight:-100
            },
            Flash: {
                title: _('flash'),
                pass: true,
                warning: _('14_we_do_not_recommend_buyin...'),
                weight:-100
            },
            Speaker: {
                title: _('dynamics'),
                pass: true,
                warning: _('16_we_do_not_recommend_buyin...'),
                weight:-100
            },
            CompassAndGsensor: {
                title: _('compass_and_g-sensor'),
                pass: true,
                warning: _('18_we_do_not_recommend_buyin...'),
                weight:-100
            },
            Camera: {
                title: _('camera'),
                pass: true,
                warning: _('20_we_do_not_recommend_buyin...'),
                weight:-100
            },
            HeadphoneJack: {
                title: _('headphone_jack'),
                pass: true,
                warning: _('22_we_do_not_recommend_buyin...'),
                weight:-100
            },
            TouchIDorFaceID: {
                title: props.currentModel === 'iPhone X' ? 'Face ID' : 'Touch ID',
                pass: true,
                warning: _('23_we_do_not_recommend_buyin...', {sensor: currentModel === 'iPhone X' ? 'Face ID' : 'Touch ID'}),
                weight:-100
            },
            WiFi: {
                title: _('wi-fi'),
                pass: true,
                warning: _('25_we_do_not_recommend_buyin...'),
                weight:-100
            },
            Bluetooth: {
                title: _('bluetooth'),
                pass: true,
                warning: _('27_we_do_not_recommend_buyin...'),
                weight:-100
            },
            Microphone: {
                title: _('microphone'),
                pass: true,
                warning: _('29_we_do_not_recommend_buyin...'),
                weight:-100
            },
            CallAndProximitySensor: {
                title: _('call_and_proximity_sensor'),
                pass: true,
                warning: _('31_we_do_not_recommend_buyin...'),
                weight:-100
            },
            Charging: {
                title: _('charging'),
                pass: true,
                warning: _('33_we_do_not_recommend_buyin...'),
                weight:-100
            },
            Warranty: {
                title: _('guarantee'),
                pass: true,
                weight:5
            },
            IMEI: {
                title: _('coincidence_imei'),
                pass: true,
                weight:5
            },
            Package: {
                title: _('equipment'),
                pass: true,
                weight:5
            }
        };

        this.state = {testList: null, conclusion: null}
    }

    componentWillMount() {

        const {rating, replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }

        let testList = [], rank = 0;

        for (let key of Object.keys(rating)) {
            let rTest = this.ratingTest[key], tResult = rating[key];
            if (typeof tResult.check !== 'undefined') {
                if (tResult.check !== rTest.pass) {
                    rank = rank+rTest.weight
                }
                testList.push(
                    <ListGroupItem key={key}>
                        {tResult.check === rTest.pass ? (
                            <FontAwesome name='check-circle-o' className='green_check'/>
                        ) : (
                            <FontAwesome name='times-circle-o' className='red_times' />
                        )} <span className='ml-2'>{rTest.title}</span>
                        {tResult.check !== rTest.pass && rTest.warning ? (
                            <p className="text-muted mb-0">
                                {rTest.warning}
                            </p>
                        ) : null}
                    </ListGroupItem>
                )
            }
            if (typeof tResult.firstStars !== 'undefined' && typeof tResult.secondStars !== 'undefined') {
                if (tResult.firstStars > tResult.secondStars) {
                    rank = rank+(tResult.firstStars-tResult.secondStars)*rTest.weight
                }
                const {firstStars, secondStars} = tResult,
                    difference_star = (firstStars <= secondStars) ? 0 : tResult.firstStars - tResult.secondStars;

                testList.push(
                    <ListGroupItem className='d-flex justify-content-between align-items-center' key={key}>
                        {rTest.title}
                        <Badge color={difference_star === 0 ? 'success' : difference_star === 1 ? 'warning' : 'danger'}>
                            <span className="h5">
                                {`${firstStars}/${secondStars}`} <FontAwesome name='star-o'/>
                            </span>
                        </Badge>
                    </ListGroupItem>
                )
            }
        }

        Promise.all([
            this.setState({testList}),
            this.conclusion(rank)
        ])
    }

    conclusion(rank) {

        const { currentModel, _ } = this.props,
            set_conclusion = (type, title, text) => {
                this.setState({
                    conclusion: {
                        type,
                        title,
                        text
                    }
                })
            };

        if (rank < 0) {
            return set_conclusion(
                'danger',
                _('0_{currentmodel}_is_not_re...', {currentModel}),
                _('1_{currentmodel}_contains_...', {currentModel})
            );
        } else if (rank === 0) {
            return set_conclusion(
                'success',
                _('2_{currentmodel}_recommend...', {currentModel}),
                _('3_{currentmodel}_is_fully_...', {currentModel})
            );
        } else if (rank > 0 && rank <= 10) {
            return set_conclusion(
                'success',
                _('4_{currentmodel}_recommend...', {currentModel}),
                _('5_{currentmodel}_has_minor...', {currentModel})
            );
        } else if (rank > 10 && rank <= 20) {
            return set_conclusion(
                'warning',
                _('6_{currentmodel}_recommend...', {currentModel}),
                _('7_{currentmodel}_has_minor...', {currentModel})
            );
        } else if (rank > 20 && rank <= 25) {
            return set_conclusion(
                'warning',
                _('8_{currentmodel}_recommend...', {currentModel}),
                _('9_{currentmodel}_has_minor...', {currentModel})
            );
        } else {
            return set_conclusion(
                'warning',
                _('10_{currentmodel}_recommend...', {currentModel}),
                _('11_{currentmodel}_has_flaws...', {currentModel})
            );
        }
    }

    render() {

        const { push, _ } = this.props,
            { testList, conclusion } = this.state;

        return (
            <BasePage Title={_('test_results')}>
                <ListGroup className='mt-4'>
                    {testList !== null && testList}
                </ListGroup>
                {
                    conclusion && (
                        <Alert color={conclusion.type} className='mt-4'>
                            <h4 className="alert-heading">
                                {conclusion.title}
                            </h4>
                            <hr />
                            <p className="mb-0">
                                {conclusion.text}
                            </p>
                        </Alert>
                    )
                }
                <Button color="primary" block className='my-4' onClick={() => push(URLS.Home)}>
                    {_('home')}
                </Button>
            </BasePage>
        )
    }
}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        currentModel: state.current_iphone.model,
        rating: state.rating
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        push: path => dispatch(push(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
