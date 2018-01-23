import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight
} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class CallAndProximitySensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    callWithHeadpods() {

        const { currentModel, image_manager } = this.props;

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
                            Выключите громкую связь, вставьте наушники и попробуйте говорить через них.
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(3)} />
                        </CardContent>
                    </Card>
                );
            default:
                return null
        }
    }

    render() {

        const { cell_status_image, image_manager } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Вызов и Датчик приближения</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Вставьте SIM-карту. Телефон должен сразу найти сеть.
                                </CardHeader>
                                <CardContent>
                                    <Image src={cell_status_image(1)} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Попробуйте совершить вызов.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Закройте пальцем Датчик приближения, экран должен потухнуть.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(4)} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Включите громкую связь для проверки Динамика.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(2)} />
                                </CardContent>
                            </Card>

                            {this.callWithHeadpods()}

                            <RatingCheck testN='CallAndProximitySensor'>
                                Вызов и Датчик приближения работают?
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
        image_manager: number => dispatch(image_manager('CallAndProximitySensor', number)),
        cell_status_image: () => dispatch(image_manager('CellStatus', 1))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CallAndProximitySensor);