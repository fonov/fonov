import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight
} from 'framework7-react';


class Microphone extends Component {

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
                        <NavCenter>Проверка микрофона {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Откройти приложение микрофон. Сделайте тестувую запись.
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/microphone/microphone.jpeg')} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Прослушайте её. Запись не должна содержать постороних шумов и тресков. Голос должне быть чистым
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/microphone/IMG_1361.PNG')} />
                                </CardContent>
                            </Card>

                            <RatingCheck testN='Microphone'>
                                Микрофона работают в {currentModel}?
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

export default connect(mapStateToProps, mapDispatchToProps)(Microphone);