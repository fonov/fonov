import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight
} from 'framework7-react';


class Sensor extends Component {

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
                        <NavCenter>Сенсор в {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Проводить польцем по всему экрану. Сенсор должен работать плавно и без задержок на всей площади экрана.
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/screen/iPhone-screen-touch-600x402.png')}/>
                                </CardContent>
                            </Card>

                            <RatingCheck testN='Sensor'>
                                Сенсор работает корректно в {currentModel}?
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

export default connect(mapStateToProps, mapDispatchToProps)(Sensor);
