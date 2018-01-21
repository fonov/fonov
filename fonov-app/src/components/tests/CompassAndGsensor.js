import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader,
    NavLeft, NavRight} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class CompassAndGsensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel, image_manager } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Компас и G-sensor {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Открыть приложение компас и поврашать телефон. При вращение телефона компас доллжен менять свое положение
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Взмахом влево открыть уровень. По переворачивайте телефон, сесор должен работать корректно и плавно.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(2)} />
                                </CardContent>
                            </Card>

                            <RatingCheck testN='CompassAndGsensor'>
                                Компас и G-sensor работают в {currentModel}?
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
        image_manager: number => dispatch(image_manager('CompassAndGsensor', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompassAndGsensor);