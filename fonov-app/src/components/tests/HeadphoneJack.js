import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight} from 'framework7-react';


class HeadphoneJack extends Component {

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
                        <NavCenter>Проверка входа для наушников {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Вставить наушники
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/headpods/headpods.png')} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Проиграть звук. Если звука нет, то попробуйте использоватеть заведомо рабочие наушники
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/звуки/step.png')} />
                                </CardContent>
                            </Card>

                            <RatingCheck testN='HeadphoneJack'>
                                Входа для наушников работают в {currentModel}?
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

export default connect(mapStateToProps, mapDispatchToProps)(HeadphoneJack);