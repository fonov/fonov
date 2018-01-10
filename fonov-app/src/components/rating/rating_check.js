import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add_rating } from '../../actions/rating'
import { Actions, ActionsLabel, ActionsButton, ActionsGroup, ContentBlock} from 'framework7-react';
import {TestBtnNext} from '../../elements/index'
import {nextTest} from '../../actions/shemeOfTest'


class RatingCheck extends Component {

    constructor(props) {
        super(props);

        this.state = {
            action_sheet: false
        }
    }

    saveRating(check) {

        const { testN, add_rating, nextTest } = this.props;

        add_rating(testN, {check});
        nextTest(testN);
    }

    render() {

        const { children, testN } = this.props,
            { action_sheet } = this.state;

        return (
            <ContentBlock>
                <TestBtnNext testN={testN} onClick={() => this.setState({action_sheet: true})}/>
                <Actions opened={action_sheet} onActionsClose={() => this.setState({action_sheet: false})}>
                    <ActionsGroup>
                        <ActionsLabel>{children}</ActionsLabel>
                        <ActionsButton onClick={() => this.saveRating(true)}>
                            Да
                        </ActionsButton>
                        <ActionsButton onClick={() => this.saveRating(false)}>
                            Нет
                        </ActionsButton>
                    </ActionsGroup>
                    <ActionsGroup>
                        <ActionsButton color="red" bold>Отмена</ActionsButton>
                    </ActionsGroup>
                </Actions>
            </ContentBlock>
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