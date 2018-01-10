import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight
} from 'framework7-react';


class CallAndProximitySensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    callWithHeadpods() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone SE':
                return (
                    <Card>
                        <CardHeader>
                            Вставьте наушники и попробуйте разговарить через них
                        </CardHeader>
                        <CardContent>
                            <Image src={require('../../assets/image/call/call_headpods.png')} />
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
                        <NavLeft/>
                        <NavCenter>Вызов и Датчик приближения {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Вставьте сим карту. Телефон должнен сразу же найти сеть.
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/call/cell.png')} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Попробуйте соверщить вызов.
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/call/call.png')} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Включите громкую связь
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/call/spiker_call.png')} />
                                </CardContent>
                            </Card>

                            {this.callWithHeadpods()}

                            <Card>
                                <CardHeader>
                                    Выключите громкую связь и зайкройте пальцем сенсор приближения. Экран должен потухнуть
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/call/call_sensor.png')} />
                                </CardContent>
                            </Card>

                            <RatingCheck testN='CallAndProximitySensor'>
                                Вызов и Датчик приближения работают в {currentModel}?
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

export default connect(mapStateToProps, mapDispatchToProps)(CallAndProximitySensor);