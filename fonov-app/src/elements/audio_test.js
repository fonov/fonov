import React, {Component} from "react";
import {TEST_TYPE_0} from "../constant/config";
import image_manager from "../actions/image-manager";
import {connect} from "react-redux";
import {getTranslate} from "react-localize-redux/lib/index";
import {PlayAudio, BaseCard} from './index'


class AudioTest extends Component {

    render() {
        const {image_manager, test_type, _} = this.props;

        return test_type === TEST_TYPE_0 ? (
            <PlayAudio />
        ) : (
            <BaseCard
                cards={[
                    [_('to_check_sound_you_will_...'), image_manager(1)]
                ]}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        test_type: state.test.type
    }
};

const mapDispatchToProps = dispatch => {
    return {
        image_manager: number => dispatch(image_manager('Speaker', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioTest);