import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Image, BaseTest} from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {CardBody, CardHeader, Card} from 'reactstrap'


class ButtonsAndVibration extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    home_button() {

        const { currentModel, image_manager, _ } = this.props;

        switch (currentModel) {
            case 'iPhone X':
                return null;
            default:
                return (
                    <Card>
                        <CardHeader>
                            {_('key_home')}
                        </CardHeader>
                        <CardBody>
                            <Image {...image_manager(2)}/>
                        </CardBody>
                    </Card>
                )
        }
    }

    render() {

        const { currentModel, image_manager, _ } = this.props;

        return (
            <BaseTest
                test='ButtonsAndVibration'
                Title={_('buttons_and_vibration')}
                rating_check
                rating_question={_('work_button_and_vibration...')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {_('lock_key')}
                    </CardHeader>
                    <CardBody>
                        <Image {...image_manager(1)}/>
                    </CardBody>
                </Card>
                <div className='mt-4'>
                    {this.home_button()}
                </div>
                <Card className='mt-4'>
                    <CardHeader>
                        {_('check_the_volume_keys_and...')}
                    </CardHeader>
                    <CardBody>
                        <Image {...image_manager(currentModel === 'iPhone X' ? 2 : 3)}/>
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
