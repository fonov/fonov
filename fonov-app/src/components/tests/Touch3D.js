import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest, Cycle3DTouch } from '../../elements/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {TEST_TYPE_0} from '../../constant/config'
import {Card, CardBody, CardHeader} from 'reactstrap'


class Touch3D extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _, test_type } = this.props;

        return (
            <BaseTest
                test='Touch3D'
                Title={_('3d_touch')}
                rating_check
                rating_question={_('3d_touch_works?')}
            >
                {
                    test_type === TEST_TYPE_0 ? (
                        <div>
                            <p className='mt-4'>
                                {_('0_click_on_a_circle_so_that...')}
                            </p>
                            <Cycle3DTouch />
                        </div>
                    ) : (
                        <Card className='mt-4'>
                            <CardHeader>
                                {_('0_to_check_3d_touch_must_fo...')}
                            </CardHeader>
                            <CardBody>
                                <Image src={image_manager(1)}/>
                            </CardBody>
                        </Card>
                    )
                }
            </BaseTest>
        )
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
