import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader} from 'framework7-react';


class TouchIDorFaceID extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone SE':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
                return (
                    <Views>
                        <View navbarThrough>
                            <Navbar>
                                <NavCenter>Проверка Touch ID {currentModel}</NavCenter>
                            </Navbar>
                            <Pages>
                                <Page>
                                    <Card>
                                        <CardHeader>
                                            Зайдите в настройки -> Touch ID и код-пароль. Нажмите Добавить палец и проверте работу Touch ID
                                        </CardHeader>
                                        <CardContent>
                                            <Image src={require('../../assets/image/touchID/Group 2.png')} />
                                        </CardContent>
                                    </Card>

                                    <RatingCheck testN='TouchIDorFaceID'>
                                        Touch ID работает в {currentModel}?
                                    </RatingCheck>
                                </Page>
                            </Pages>
                        </View>
                    </Views>
                );
            case 'iPhone X':
                return (
                    <Views>
                        <View navbarThrough>
                            <Navbar>
                                <NavCenter>Проверка Face ID {currentModel}</NavCenter>
                            </Navbar>
                            <Pages>
                                <Page>
                                    <Card>
                                        <CardHeader>
                                            Для проведки Face ID необходимо зайти в настройки -> Face ID и код-пароль. Нажмите cканировать лицо и проверьте работу Face ID
                                        </CardHeader>
                                        <CardContent>
                                            <Image src={require('../../assets/image/faceID/Face ID.png')} />
                                        </CardContent>
                                    </Card>

                                    <RatingCheck testN='TouchIDorFaceID'>
                                        Face ID работают в {currentModel}
                                    </RatingCheck>
                                </Page>
                            </Pages>
                        </View>
                    </Views>
                );
            default:
                return null
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(TouchIDorFaceID);