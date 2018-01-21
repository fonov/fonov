import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight
} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class Camera extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, no_front_camera } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Камера</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    {
                                        no_front_camera ? (
                                            <span>
                                                Откройте приложение камера.
                                                Проверьте изображение с камеры.
                                                Изображение должно быть чистым, без размытия.
                                            </span>
                                        ) : (
                                            <span>
                                                Откройте Центр управления, нажмите на иконку "Камера".
                                                Проверьте изображение с фронтальной и передней камеры.
                                                Изображение должно быть чистым, без размытия.
                                            </span>
                                        )
                                    }
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(no_front_camera ? 2 : 1)}/>
                                </CardContent>
                            </Card>

                            <RatingCheck testN='Camera'>
                                Камера работает?
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
        currentModel: state.current_iphone.model,
        no_front_camera: !(['iphone', 'iphone 3g', 'iphone 3gs'].indexOf(state.current_iphone.model.toLowerCase()) === -1)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('Camera', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Camera);