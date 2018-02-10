import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {CardBody, CardHeader, Card} from 'reactstrap'


class Charging extends Component {

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
                test="Charging"
                Title={_('charging_port')}
                rating_check
                rating_question={_('charging_port_works?')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {_('connect_your_phone_to_cha...')}
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
        image_manager: number => dispatch(image_manager('Charging', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Charging);