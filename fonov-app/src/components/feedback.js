import React, { Component } from 'react';
import { connect } from 'react-redux'
import {SHARE_URL, LANGUAGES_CODE_EN, LANGUAGES_CODE_RU} from '../constant/config'
import { getTranslate, getActiveLanguage,  } from 'react-localize-redux';
import {BasePage} from '../elements/index'
import { VK, Comments } from 'react-vk';
import FacebookProvider, { Comments as FBComments } from 'react-facebook';


class FeedBack extends Component {

    constructor(props) {
        super(props);

        this.state = {
            select_type_test: false
        }
    }

    render() {
        const {currentLanguage, _} = this.props;

        return (
            <BasePage
                Title={_('comments')}
            >
                {
                    currentLanguage === LANGUAGES_CODE_EN ? (
                        <div className='mt-4'>
                            <FacebookProvider appId="1844406235577602">
                                <FBComments href={SHARE_URL} />
                            </FacebookProvider>
                        </div>
                    ) : currentLanguage === LANGUAGES_CODE_RU ? (
                        <div className='mt-4'>
                            <VK apiId={6374200}>
                                <Comments/>
                            </VK>
                        </div>
                    ) : null
                }
            </BasePage>
        )
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBack);
