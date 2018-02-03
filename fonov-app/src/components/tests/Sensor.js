import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {
    Card, CardContent,
    ContentBlockTitle, CardHeader
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import Draggable from 'react-draggable';
import {TEST_TYPE_0} from '../../constant/config'


class Sensor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            opacity: 1
        }
    }

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _, test_type, image_manager2 } = this.props,
            {opacity} = this.state;

        return (
            <BaseTest test='Sensor' title={_('sensor')} navStyle={{opacity}} ProgressStyle={{opacity}}>
                {
                    test_type === TEST_TYPE_0 ? (
                        <div>
                            <ContentBlockTitle className='content_block_title' style={{opacity}}>
                                {_('0_for_move_the_image_around...')}
                            </ContentBlockTitle>
                            <Draggable
                                position={{x: 0, y: 0}}
                                onStart={() => this.setState({opacity: 0})}
                                onStop={() => this.setState({opacity: 1})}
                            >
                                <div>
                                    <Image src={image_manager2(1)}/>
                                </div>
                            </Draggable>
                        </div>
                    ) : (
                        <Card>
                            <CardHeader>
                                {_('swipe_your_finger_across_...')}
                            </CardHeader>
                            <CardContent>
                                <Image src={image_manager(1)}/>
                            </CardContent>
                        </Card>
                    )
                }
                <RatingCheck testN='Sensor' style={{opacity}}>
                    {_('the_sensor_is_working_cor...')}
                </RatingCheck>
            </BaseTest>
        );
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
        image_manager: number => dispatch(image_manager('Sensor', number)),
        image_manager2: number => dispatch(image_manager('Sensor_Self', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sensor);
