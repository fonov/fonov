import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Image} from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader,
    NavLeft, NavRight} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class ButtonsAndVibration extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    home_button() {

        const { currentModel, image_manager } = this.props;

        switch (currentModel) {
            case 'iPhone X':
                return null;
            default:
                return (
                    <Card>
                        <CardHeader>
                            Клавиша Домой
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(2)}/>
                        </CardContent>
                    </Card>
                )
        }
    }

    render() {

        const { currentModel, image_manager } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Проверка кнопок и вибрации {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Клавиша блокировки
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)}/>
                                </CardContent>
                            </Card>
                            {this.home_button()}
                            <Card>
                                <CardHeader>
                                    Клавиши громкости и кнопку бесшумного режима. При переводе iPhone в бесшумных телефон должен завибрировать
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(currentModel === 'iPhone X' ? 2 : 3)}/>
                                </CardContent>
                            </Card>

                            <RatingCheck testN='ButtonsAndVibration'>
                                Работаю кнопки и вибрация в {currentModel}?
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
        image_manager: number => dispatch(image_manager('ButtonsAndVibration', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsAndVibration);
