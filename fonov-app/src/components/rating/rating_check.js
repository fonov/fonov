import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add_rating } from '../../actions/rating'
import {nextTest} from '../../actions/main'
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class RatingCheck extends Component {

    saveRating(check) {

        const { testN, add_rating, nextTest } = this.props;

        add_rating(testN, {check});
        nextTest(testN);
    }

    render() {

        const { children, _, style = {} } = this.props;

        /*
        TODO: UPDATE UI
        return (

            <div style={style}>
                <ContentBlockTitle className='content_block_title'>
                    {children}
                </ContentBlockTitle>
                <ContentBlock>
                    <GridRow>
                        <GridCol>
                            <Button big onClick={() => this.saveRating(false)}>
                                {_('no')}
                            </Button>
                        </GridCol>
                        <GridCol>
                            <Button big onClick={() => this.saveRating(true)}>
                                {_('yes')}
                            </Button>
                        </GridCol>
                    </GridRow>
                </ContentBlock>
            </div>
        )
        */
    }
}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add_rating: (testN, data) => dispatch(add_rating(testN, data)),
        nextTest: testN => dispatch(nextTest(testN))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingCheck);