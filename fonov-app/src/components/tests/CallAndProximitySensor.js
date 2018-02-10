import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {CardBody, CardHeader, Card} from 'reactstrap'


class CallAndProximitySensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    callWithHeadpods() {

        const { currentModel, image_manager, _ } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone SE':
                return (
                    <Card className='mt-4'>
                        <CardHeader>
                            {_('turn_off_the_speakerphone...')}
                        </CardHeader>
                        <CardBody>
                            <Image {...image_manager(3)} />
                        </CardBody>
                    </Card>
                );
            default:
                return null
        }
    }

    render() {

        const { cell_status_image, image_manager, _, call_image} = this.props;

        return (
            <BaseTest
                test="CallAndProximitySensor"
                Title={_('call_and_proximity_sensor')}
                rating_check
                rating_question={_('call_and_the_proximity_se...')}
            >
                {
                    [
                        [_('insert_the_sim_card._the_...'), cell_status_image()],
                        [_('try_to_make_a_call.'), call_image(1)],
                        [_('0_during_the_call_close_th...'), image_manager(4)],
                        [_('put_it_on_speaker_to_chec...'), call_image(2)]
                    ].map((item, i) => (
                        <Card key={i} className='mt-4'>
                            <CardHeader>
                                {item[0]}
                            </CardHeader>
                            <CardBody>
                                <Image {...item[1]} />
                            </CardBody>
                        </Card>
                    ))
                }
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
        image_manager: number => dispatch(image_manager('CallAndProximitySensor', number)),
        cell_status_image: () => dispatch(image_manager('CellStatus', 1)),
        call_image: number => dispatch(image_manager('Call', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CallAndProximitySensor);