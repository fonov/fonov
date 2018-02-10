import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Image, BaseTest} from '../../elements/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {Card, CardBody, CardHeader} from 'reactstrap'


class WaterSensor extends Component {

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
                test='WaterSensor'
                Title={_('moisture_indicator')}
                rating_check={{revert_color: true}}
                rating_question={_('0_iphone_was_exposed_to_moi...')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {_('moisture_has_a_devastatin...')}
                    </CardHeader>
                    <CardBody>
                        <Image {...image_manager(1)} />
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
        image_manager: number => dispatch(image_manager('WaterSensor', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaterSensor);
