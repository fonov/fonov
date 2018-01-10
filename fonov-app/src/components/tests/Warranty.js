import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {View, Navbar, Pages, Page, Views, NavCenter, Card,
    CardContent, CardHeader, Button, ContentBlock} from 'framework7-react';


class Warranty extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const {currentModel} = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavCenter>Проверка гарантии</NavCenter>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Зайти в настройки -> основные -> об устройстве -> серийный номер. Нажмите на серийны номер и выбирете скопировать. Затем перейдите на официальный сайт Apple для проверки гарантии
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/waranty/Group 7.png')} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Затем перейдите на официальный сайт Apple для проверки гарантии
                                </CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/waranty/Group 8.png')} />
                                </CardContent>
                            </Card>

                            <ContentBlock>
                                <Button
                                    fill
                                    big
                                    color='green'
                                    onClick={() => window.open("https://checkcoverage.apple.com")}
                                >
                                    Проверить гарантию
                                </Button>
                            </ContentBlock>

                            <RatingCheck testN='Warranty'>
                                Данные о гарантии {currentModel} совпадают с заявленной информацией?
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

export default connect(mapStateToProps, mapDispatchToProps)(Warranty);