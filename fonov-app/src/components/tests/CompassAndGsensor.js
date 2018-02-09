import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {CardHeader, Card, CardBody} from 'reactstrap'


class CompassAndGsensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        return (
            <BaseTest
                test='CompassAndGsensor'
                Title={_('compass_and_g-sensor')}
                rating_check
                rating_question= {_('compass_and_g-sensor_work...')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {_('open_the_compass_app_and_...')}
                    </CardHeader>
                    <CardBody>
                        <Image src={image_manager(1)} />
                    </CardBody>
                </Card>

                <Card className='mt-4'>
                    <CardHeader>
                        {_('swipe_to_the_left_to_open...')}
                    </CardHeader>
                    <CardBody>
                        <Image src={image_manager(2)} />
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
        image_manager: number => dispatch(image_manager('CompassAndGsensor', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompassAndGsensor);