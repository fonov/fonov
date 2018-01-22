import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader,
    NavLeft, NavRight} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class TouchIDorFaceID extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel, image_manager } = this.props;

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
                                <NavLeft/>
                                <NavCenter>Touch ID</NavCenter>
                                <NavRight/>
                            </Navbar>
                            <Pages>
                                <Page>
                                    <Card>
                                        <CardHeader>
                                            Зайдите в Настройки -> Touch ID и код-пароль. Нажмите Добавить "палец" и проверьте работу Touch ID.
                                        </CardHeader>
                                        <CardContent>
                                            <Image src={image_manager(1)} />
                                        </CardContent>
                                    </Card>

                                    <RatingCheck testN='TouchIDorFaceID'>
                                        Touch ID работает?
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
                                <NavLeft/>
                                <NavCenter>Face ID</NavCenter>
                                <NavRight/>
                            </Navbar>
                            <Pages>
                                <Page>
                                    <Card>
                                        <CardHeader>
                                            Для проверки Face ID зайдите в Настройки -> Face ID и код-пароль. Нажмите сканировать лицо и проверьте работу Face ID.
                                        </CardHeader>
                                        <CardContent>
                                            <Image src={image_manager(1)} />
                                        </CardContent>
                                    </Card>

                                    <RatingCheck testN='TouchIDorFaceID'>
                                        Face ID работает?
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
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('TouchIDorFaceID', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TouchIDorFaceID);