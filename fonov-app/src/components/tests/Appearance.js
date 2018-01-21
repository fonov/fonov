import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { Rating5Stars } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from '../../constant/urls'
import { View, Navbar, Pages, Page, Views, NavCenter,
    Card, CardHeader, CardContent, NavLeft, NavRight, ContentBlockTitle
} from 'framework7-react';
import image_manager from '../../actions/image-manager'


class Appearance extends Component {

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
                        <NavCenter>Внешний вид {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <ContentBlockTitle className='content_block_title'>
                                Осмотрите iPhone на наличие царапин, потертостей, трещин, сколов.
                            </ContentBlockTitle>
                            <Card>
                                <CardContent>
                                    <p>Извлеките iPhone из чехла.</p>
                                    <p>Удалите защитную пленку или стекло.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>Передняя часть телефона.</CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)}/>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>Задняя часть телефона.</CardHeader>
                                <CardContent>
                                    <Image src={image_manager(2)}/>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>Боковые грани телефона.</CardHeader>
                                <CardContent>
                                    <Image src={image_manager(3)}/>
                                </CardContent>
                            </Card>

                            <Rating5Stars
                                testN='Appearance'
                                firstTitle='Заявленное состояние'
                                lastTitle='Реальное состояние'
                            >
                                Оценка внешнего вида.
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
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('Appearance', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appearance);
