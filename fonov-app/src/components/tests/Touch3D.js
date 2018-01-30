import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, TestStatus, Cycle3DTouch } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {
    View, Navbar, Pages,
    Page, Views, NavCenter,
    Card, CardContent, CardHeader,
    NavLeft, ContentBlockTitle
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class Touch3D extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>{_('3d_touch')}</NavCenter>
                        <TestStatus test='Touch3D'/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    {_('0_to_check_3d_touch_must_fo...')}
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)}/>
                                </CardContent>
                            </Card>

                            <ContentBlockTitle className='content_block_title'>
                                {_('0_click_on_a_circle_so_that...')}
                            </ContentBlockTitle>

                            <Cycle3DTouch />

                            <RatingCheck testN='Touch3D'>
                                {_('3d_touch_works?')}
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
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('Touch3D', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Touch3D);
