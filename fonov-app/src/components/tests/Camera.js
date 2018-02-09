import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class Camera extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, no_front_camera, _ } = this.props;

        /*
        TODO: UPDATE UI
        return (
            <BaseTest test='Camera' title={_('camera')}>
                <Card>
                    <CardHeader>
                        {
                            no_front_camera ? (
                                <span>{_('open_the_camera_app._chec...')}</span>
                            ) : (
                                <span>{_('open_the_control_center_...')}</span>
                            )
                        }
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(no_front_camera ? 2 : 1)}/>
                    </CardContent>
                </Card>

                <RatingCheck testN='Camera'>
                    {_('the_camera_works?')}
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