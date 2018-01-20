import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { Rating5Stars } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from '../../constant/urls'
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardHeader, CardFooter, CardContent, NavLeft, NavRight
} from 'framework7-react';
import current_iphone from "../../redux/reducers/current-iphone";


class Appearance extends Component {

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
                        <NavCenter>Внешний вид {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>

                            <Card>
                                <CardHeader>Извлеките iPhone из чехла</CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/внешний вид/removeCase.png')} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>Удалите защитную пленку или стекло</CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/внешний вид/removeFilm.png')} />
                                </CardContent>
                                <CardFooter>
                                    Осмотрите iPhone на наличие царапин, потертостей, трещин, сколов.
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>Передния часть телефона</CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/внешний вид/iPhone Front.png')}/>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>Заднию часть телефона</CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/внешний вид/iPhone Back.png')}/>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>Боковые грани телефона</CardHeader>
                                <CardContent>
                                    <Image src={require('../../assets/image/внешний вид/sides.png')}/>
                                </CardContent>
                            </Card>

                            <Rating5Stars
                                testN='Appearance'
                                firstTitle='Заявленное состояние'
                                lastTitle='Реальное состояние'
                            >
                                Оценка внешнего вида
                            </Rating5Stars>
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

export default connect(mapStateToProps, mapDispatchToProps)(Appearance);
