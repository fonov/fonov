import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader,
    NavLeft, NavRight} from 'framework7-react';


class CompassAndGsensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel } = this.props;

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
                                    <Image src={require('../../assets/image/compas/IMG_1352.PNG')} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Взмахом влево открыть уровень. По переворачивайте телефон, сесор должен работать корректно и плавно.
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/compas/IMG_1353.PNG')} />
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
        currentModel: state.currentModel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompassAndGsensor);