import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest, BaseCard } from '../../elements/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {TEST_TYPE_0} from '../../constant/config'
import {CardBody, CardHeader, Card, CardFooter, Button} from 'reactstrap'


class Warranty extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _, test_type } = this.props;

        return (
            <BaseTest
                test='Warranty'
                Title={_('warranty')}
                rating_check
                rating_question={_('information_about_warrant...')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {_(test_type === TEST_TYPE_0 ? 'go_to_settings_->_general...' : '0_locate_the_serial_number....')}
                    </CardHeader>
                    <CardBody>
                        <Image {...image_manager(1)} />
                    </CardBody>
                    <CardFooter>
                        {_('then_go_to_the_official_...')}
                    </CardFooter>
                </Card>
                <Button
                    color="success"
                    block
                    outline
                    size="lg"
                    onClick={() => window.open(_("Apple_Warranty_URI"))}
                    className='mt-4'
                >
                    {_('check_guarantee')}
                </Button>
                <BaseCard
                    cards={[
                        [_('insert_the_serial_number...'), image_manager(2)],
                        [_('scroll_down_to_warranty_s...'), image_manager(3)]
                    ]}
                />
            </BaseTest>
        )
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        currentModel: state.current_iphone.model,
        test_type: state.test.type
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('Warranty', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Warranty);