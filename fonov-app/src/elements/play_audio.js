import React, {Component} from "react";
import Sound from 'react-sound';
import FontAwesome from 'react-fontawesome'
import {getTranslate} from "react-localize-redux/lib/index";
import {connect} from "react-redux";


class PlayAudio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playStatus: Sound.status.STOPPED
        }
    }

    render() {

        const {playStatus} = this.state,
            {_} = this.props;

        /*
        TODO: UPDATE UI
        return (
            <div>
                <ContentBlockTitle className='content_block_title'>
                    {_('play_the_sound')}
                </ContentBlockTitle>

                <Sound
                    url={require('../assets/audio/krasivyj_rington_samsung_galaxy.mp3')}
                    playStatus={playStatus}
                    onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
                />

                <ContentBlock style={{textAlign: 'center', padding: '20px'}}>
                    <FontAwesome
                        name={playStatus === Sound.status.STOPPED ? 'play': 'pause'}
                        style={{fontSize: '7rem'}}
                        onClick={() => this.setState({
                            playStatus: playStatus === Sound.status.STOPPED ? Sound.status.PLAYING : Sound.status.STOPPED
                        })}
                    />
                </ContentBlock>
            </div>
        )
        */
    }
}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayAudio);