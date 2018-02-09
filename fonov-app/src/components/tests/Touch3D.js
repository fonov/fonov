import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest, Cycle3DTouch } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {TEST_TYPE_0} from '../../constant/config'


class Touch3D extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _, test_type } = this.props;

        /*
        TODO: UPDATE UI
        return (
            <BaseTest test='Touch3D' title={_('3d_touch')}>
                {
                    test_type === TEST_TYPE_0 ? (
                        <div>
                            <ContentBlockTitle className='content_block_title'>
                                {_('0_click_on_a_circle_so_that...')}
                            </ContentBlockTitle>

                            <Cycle3DTouch />
                        </div>
                    ) : (
                        <Card>
                            <CardHeader>
                                {_('0_to_check_3d_touch_must_fo...')}
                            </CardHeader>
                            <CardContent>
                                <Image src={image_manager(1)}/>
                            </CardContent>
                        </Card>
                    )
                }
                <RatingCheck testN='Touch3D'>
                    {_('3d_touch_works?')}
                </RatingCheck>
            </BaseTest>
        );
        */
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        currentModel: state.current_iphone.model,
        test_type: state.test.type
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('Touch3D', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Touch3D);
