import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader,
    NavLeft, NavRight} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class TouchIDorFaceID extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel, image_manager, _ } = this.props;

        switch (currentModel) {
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone SE':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
                return (
                    <Views>
                        <View navbarThrough>
                            <Navbar>
                                <NavLeft/>
                                <NavCenter>{_('touch_id')}</NavCenter>
                                <NavRight/>
                            </Navbar>
                            <Pages>
                                <Page>
                                    <Card>
                                        <CardHeader>
                                            {_('go_to_settings_->_touch_i...')}
                                        </CardHeader>
                                        <CardContent>
                                            <Image src={image_manager(1)} />
                                        </CardContent>
                                    </Card>

                                    <RatingCheck testN='TouchIDorFaceID'>
                                        {_('touch_id_works?')}
                                    </RatingCheck>
                                </Page>
                            </Pages>
                        </View>
                    </Views>
                );
            case 'iPhone X':
                return (
                    <Views>
                        <View navbarThrough>
                            <Navbar>
                                <NavLeft/>
                                <NavCenter>{_('face_id')}</NavCenter>
                                <NavRight/>
                            </Navbar>
                            <Pages>
                                <Page>
                                    <Card>
                                        <CardHeader>
                                            {_('to_check_face_id_go_to_se...')}
                                        </CardHeader>
                                        <CardContent>
                                            <Image src={image_manager(1)} />
                                        </CardContent>
                                    </Card>

                                    <RatingCheck testN='TouchIDorFaceID'>
                                        {_('face_id_works?')}
                                    </RatingCheck>
                                </Page>
                            </Pages>
                        </View>
                    </Views>
                );
            default:
                return null
        }
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('TouchIDorFaceID', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TouchIDorFaceID);