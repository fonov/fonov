import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add_rating } from '../../actions/rating'
import { ContentBlock, GridRow, GridCol, Button, ContentBlockTitle} from 'framework7-react';
import {nextTest} from '../../actions/shemeOfTest'


class RatingCheck extends Component {

    saveRating(check) {

        const { testN, add_rating, nextTest } = this.props;

        add_rating(testN, {check});
        nextTest(testN);
    }

    render() {

        const { children } = this.props;

        return (
            <div>
                <ContentBlockTitle>
                    {children}
                </ContentBlockTitle>
                <ContentBlock>
                    <GridRow>
                        <GridCol>
                            <Button big onClick={() => this.saveRating(true)}>
                                Да
                            </Button>
                        </GridCol>
                        <GridCol>
                            <Button big onClick={() => this.saveRating(false)}>
                                Нет
                            </Button>
                        </GridCol>
                    </GridRow>
                </ContentBlock>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        add_rating: (testN, data) => dispatch(add_rating(testN, data)),
        nextTest: testN => dispatch(nextTest(testN))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingCheck);