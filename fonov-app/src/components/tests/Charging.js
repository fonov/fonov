import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader,
    NavLeft, NavRight} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class Charging extends Component {

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
                        <NavCenter>Проверка зарядки в {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Подключите телефон к зарядки. Проверте плотно ли находиться разьм зарядки, отсутсвуют ли лифты. Телефон при подключние зарядки сразу же должен начать зарежаться
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                            </Card>
                            <RatingCheck testN='Charging'>
                                Зарядка работают в {currentModel}?
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
        image_manager: number => dispatch(image_manager('Charging', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Charging);