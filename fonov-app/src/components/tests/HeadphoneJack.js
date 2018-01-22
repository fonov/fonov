import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import {
    View, Navbar, Pages, Page,
    Views, NavCenter,Card, CardContent,
    CardHeader, NavLeft, NavRight, CardFooter
} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class HeadphoneJack extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, image_speaker } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Входа для наушников</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Вставьте наушники.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    Проиграйте любой звук в Настройки -> Звуки -> Тактильные сигналы.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_speaker()} />
                                </CardContent>
                                <CardFooter>
                                    Если звука нет, попробуйте использовать другие наушники. Если звука все равно нет, значит вход для наушников не работает.
                                </CardFooter>
                            </Card>
                            <RatingCheck testN='HeadphoneJack'>
                                Вход для наушников работает?
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
        image_manager: number => dispatch(image_manager('HeadphoneJack', number)),
        image_speaker: () => dispatch(image_manager('Speaker', 1))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadphoneJack);