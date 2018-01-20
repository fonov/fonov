import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight
} from 'framework7-react';


class Package extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    earpods() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <Image src={require('../../assets/image/accessories/aPPLEMB770_enl.jpg')} />
                );
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <Image src={require('../../assets/image/accessories/Apple-EarPods-with-Remote-and-Mic.png')} />
                );
            default:
                return null
        }
    }

    adapter() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <Card>
                        <CardHeader>
                            Адаптер Lightning/выход 3,5 мм для наушников
                        </CardHeader>
                        <CardContent>
                            <Image src={require('../../assets/image/accessories/4c2faf2c784a8663258f2fe9495542b0.jpg')} />
                        </CardContent>
                    </Card>
                );
            default:
                return null
        }
    }

    cable() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <Card>
                        <CardHeader>
                            30 пиновый кабель
                        </CardHeader>
                        <CardContent>
                            <Image src={require('../../assets/image/accessories/apple-30-pin-cable.jpg')} />
                        </CardContent>
                    </Card>
                );
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
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
                            Кабель Lightning/USB
                        </CardHeader>
                        <CardContent>
                            <Image src={require('../../assets/image/accessories/apple-lightning-cable-1_1024x1024.png')} />
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
                        <NavCenter>Проверка комплектации {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Наушники
                                </CardHeader>
                                <CardContent>
                                    {this.earpods()}
                                </CardContent>
                            </Card>

                            {this.adapter()}

                            <Card>
                                <CardHeader>
                                    Зарядное устройстов
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/accessories/MD810.jpg')} />
                                </CardContent>
                            </Card>

                            {this.cable()}

                            <RatingCheck testN='Package'>
                                Комплектация {currentModel} совпадают с заявленной?
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
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Package);