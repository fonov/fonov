import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {View, Navbar, Pages, Page, Views, NavCenter, Card,
    CardContent, CardHeader, Button, ContentBlock,
    NavLeft, NavRight, CardFooter
} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class Warranty extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Гарантии</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Зайдите в Настройки -> Основные -> Об этом устройстве -> Серийный номер. Нажмите на серийный номер и выберите "Скопировать".
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                                <CardFooter>
                                    Затем перейдите на официальный сайт Apple для проверки гарантии.
                                </CardFooter>
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

                            <Card>
                                <CardHeader>
                                    Вставьте серийный номер, введите captcher и нажмите далее
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(2)} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Пролистайте вниз до статуса гарантии
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(3)} />
                                </CardContent>
                            </Card>

                            <RatingCheck testN='Warranty'>
                                Данные о гарантии iPhone совпадают с заявленной информацией?
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
        image_manager: number => dispatch(image_manager('Warranty', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Warranty);