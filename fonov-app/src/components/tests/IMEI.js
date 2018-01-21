import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight
} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class IMEI extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    secondImei() {

        const { currentModel, image_manager } = this.props;

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
                            <Image src={image_manager(3)} />
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
                            <Image src={image_manager(4)} />
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
                            <Image src={image_manager(1)} />
                        </CardContent>
                    </Card>
                );
            default:
                return null
        }
    }

    render() {

        const { currentModel, image_manager } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Проверка совподения IMEI {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Нстройки->Основные->О Устройстве.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(2)} />
                                </CardContent>
                            </Card>

                            {this.secondImei()}

                            <Card>
                                <CardHeader>
                                    На коробке.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(5)} />
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
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('IMEI', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IMEI);