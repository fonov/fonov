import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import {
    Card, CardContent, CardHeader
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


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
                    <Card>
                        <CardHeader>
                            {_('turn_off_the_speakerphone...')}
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(3)} />
                        </CardContent>
                    </Card>
                );
            default:
                return null
        }
    }

    render() {

        const { cell_status_image, image_manager, _ } = this.props;

        return (
            <BaseTest test="CallAndProximitySensor" title={_('call_and_proximity_sensor')}>
                <Card>
                    <CardHeader>
                        {_('insert_the_sim_card._the_...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={cell_status_image()} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        {_('try_to_make_a_call.')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(1)} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        {_('0_during_the_call_close_th...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(4)} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        {_('put_it_on_speaker_to_chec...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(2)} />
                    </CardContent>
                </Card>

                {this.callWithHeadpods()}

                <RatingCheck testN='CallAndProximitySensor'>
                    {_('call_and_the_proximity_se...')}
                </RatingCheck>
            </BaseTest>
        );
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
        cell_status_image: () => dispatch(image_manager('CellStatus', 1))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CallAndProximitySensor);