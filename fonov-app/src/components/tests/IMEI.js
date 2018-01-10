import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader} from 'framework7-react';


class IMEI extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    secondImei() {

        const { currentModel } = this.props;

        switch(currentModel) {
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <Card>
                        <CardHeader>
                            На слоте для сим карты
                        </CardHeader>
                        <CardContent>
                            <Image src={require('../../assets/image/imei/iphone6s-SIM-card-illustration.png')} />
                        </CardContent>
                    </Card>
                );
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
                return (
                    <Card>
                        <CardHeader>
                            На задней стороне iphone
                        </CardHeader>
                        <CardContent>
                            <Image src={require('../../assets/image/imei/iphone6-imei-back-device.jpg')} />
                        </CardContent>
                    </Card>
                );
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <Card>
                        <CardHeader>
                            На слоте для сим карты
                        </CardHeader>
                        <CardContent>
                            <Image src={require('../../assets/image/imei/SIM-card-illustration.png')} />
                        </CardContent>
                    </Card>
                );
            default:
                return null
        }
    }

    render() {

        const { currentModel } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavCenter>Проверка совподения IMEI {currentModel}</NavCenter>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Нстройки->Основные->О Устройстве.
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/imei/iphone7-ios11-settings-general-about-imei.jpg')} />
                                </CardContent>
                            </Card>

                            {this.secondImei()}

                            <Card>
                                <CardHeader>
                                    На коробке.
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/imei/How-to-Find-IMEI-Number-Correctly-before-Unlock-11.jpg')} />
                                </CardContent>
                            </Card>

                            <RatingCheck testN='IMEI'>
                                IMEI совподают?
                            </RatingCheck>
                        </Page>
                    </Pages>
                </View>
            </Views>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentModel: state.currentModel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IMEI);