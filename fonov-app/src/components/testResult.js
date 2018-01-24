import React, { Component } from 'react';
import { connect } from 'react-redux'
import {replace, push} from 'react-router-redux';
import URLS from '../constant/urls'
import FontAwesome from 'react-fontawesome'
import { View, Navbar, Pages, Page, Views, NavCenter, ContentBlock, Button, List, ListItem, Badge, NavLeft,
    NavRight, Card, CardContent, CardHeader
} from 'framework7-react';
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


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
                    <li className='item-content'>
                        <div className="item-media">
                            {tResult.check === rTest.pass ? (
                                <FontAwesome name='check-circle-o' style={{fontSize: 40, color: 'MediumSeaGreen'}}/>
                            ) : (
                                <FontAwesome name='times-circle-o' style={{fontSize: 40, color: 'Tomato'}}/>
                            )}
                        </div>
                        <div className="item-inner">
                            <div className="item-title">
                                {rTest.title}
                                {tResult.check !== rTest.pass && rTest.warning ? (
                                    <div className="item-footer">
                                        {rTest.warning}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </li>
                )
            }
            if (typeof tResult.firstStars !== 'undefined' && typeof tResult.secondStars !== 'undefined') {
                if (tResult.firstStars > tResult.secondStars) {
                    rank = rank+(tResult.firstStars-tResult.secondStars)*rTest.weight
                }
                const {firstStars, secondStars} = tResult,
                    difference_star = (firstStars <= secondStars) ? 0 : tResult.firstStars - tResult.secondStars;

                testList.push(
                    <ListItem title={rTest.title}>
                        <Badge
                            color={difference_star === 0 ? 'green' : difference_star === 1 ? 'orange' : 'red'}
                        >
                            {`${firstStars}/${secondStars}`} <FontAwesome name='star-o'/>
                        </Badge>
                    </ListItem>
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
                'card_header_danger',
                _('0_{currentmodel}_is_not_re...', {currentModel}),
                _('1_{currentmodel}_contains_...', {currentModel})
            );
        } else if (rank === 0) {
            return set_conclusion(
                'card_header_success',
                _('2_{currentmodel}_recommend...', {currentModel}),
                _('3_{currentmodel}_is_fully_...', {currentModel})
            );
        } else if (rank > 0 && rank <= 10) {
            return set_conclusion(
                'card_header_success',
                _('4_{currentmodel}_recommend...', {currentModel}),
                _('5_{currentmodel}_has_minor...', {currentModel})
            );
        } else if (rank > 10 && rank <= 20) {
            return set_conclusion(
                'card_header_success',
                _('6_{currentmodel}_recommend...', {currentModel}),
                _('7_{currentmodel}_has_minor...', {currentModel})
            );
        } else if (rank > 20 && rank <= 25) {
            return set_conclusion(
                'card_header_success',
                _('8_{currentmodel}_recommend...', {currentModel}),
                _('9_{currentmodel}_has_minor...', {currentModel})
            );
        } else {
            return set_conclusion(
                'card_header_success',
                _('10_{currentmodel}_recommend...', {currentModel}),
                _('11_{currentmodel}_has_flaws...', {currentModel})
            );
        }
    }

    render() {

        const { push, _ } = this.props,
            { testList, conclusion } = this.state;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>{_('test_results')}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <List inset>
                                {testList !== null && testList}
                            </List>

                            {
                                conclusion && (
                                    <Card>
                                        <CardHeader className={conclusion.type}>
                                            {conclusion.title}
                                        </CardHeader>
                                        <CardContent>
                                            {conclusion.text}
                                        </CardContent>
                                    </Card>
                                )
                            }

                            <ContentBlock>
                                <Button big color="blue" onClick={() => push(URLS.Home)}>
                                    {_('home')}
                                </Button>
                            </ContentBlock>
                        </Page>
                    </Pages>
                </View>
            </Views>
        );
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
