import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {Card, CardBody, CardHeader} from 'reactstrap'


class Camera extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, no_front_camera, _ } = this.props;

        return (
            <BaseTest
                test='Camera'
                Title={_('camera')}
                rating_check
                rating_question={_('the_camera_works?')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {
                            no_front_camera ? (
                                <span>{_('open_the_camera_app._chec...')}</span>
                            ) : (
                                <span>{_('open_the_control_center_...')}</span>
                            )
                        }
                    </CardHeader>
                    <CardBody>
                        <Image {...image_manager(1)}/>
                    </CardBody>
                </Card>
            </BaseTest>
        )
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
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