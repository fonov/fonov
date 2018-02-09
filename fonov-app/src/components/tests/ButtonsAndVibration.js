import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Image, BaseTest} from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class ButtonsAndVibration extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    home_button() {

        const { currentModel, image_manager, _ } = this.props;

        /*
        TODO: UPDATE UI
        switch (currentModel) {
            case 'iPhone X':
                return null;
            default:
                return (
                    <Card>
                        <CardHeader>
                            {_('key_home')}
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(2)}/>
                        </CardContent>
                    </Card>
                )
        }
        */
    }

    render() {

        const { currentModel, image_manager, _ } = this.props;

        /*
        TODO: UPDATE UI
        return (
            <BaseTest test='ButtonsAndVibration' title={_('buttons_and_vibration')}>
                <Card>
                    <CardHeader>
                        {_('lock_key')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(1)}/>
                    </CardContent>
                </Card>
                {this.home_button()}
                <Card>
                    <CardHeader>
                        {_('check_the_volume_keys_and...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(currentModel === 'iPhone X' ? 2 : 3)}/>
                    </CardContent>
                </Card>
                <RatingCheck testN='ButtonsAndVibration'>
                    {_('work_button_and_vibration...')}
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
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('ButtonsAndVibration', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsAndVibration);
