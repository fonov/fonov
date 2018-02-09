import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Image, BaseTest} from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class WaterSensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        /*
        TODO: UPDATE UI
        return (
            <BaseTest test='WaterSensor' title={_('moisture_indicator')}>
                <Card>
                    <CardHeader>
                        {_('moisture_has_a_devastatin...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(1)} />
                    </CardContent>
                </Card>
                <RatingCheck testN='WaterSensor'>
                    {_('0_iphone_was_exposed_to_moi...')}
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
        image_manager: number => dispatch(image_manager('WaterSensor', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaterSensor);
