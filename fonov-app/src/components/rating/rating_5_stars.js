import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add_rating } from '../../actions/rating'
import FontAwesome from 'react-fontawesome'
import { ContentBlock, ContentBlockTitle, Link, PickerModal, Toolbar,
    GridRow, GridCol, Page} from 'framework7-react';
import {TestBtnNext} from '../../elements/index'
import {nextTest} from '../../actions/shemeOfTest'


class Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startPosition: -1
        }
    }

    stars(){

        const { countStars, onChange } = this.props,
            { startPosition } = this.state;

        let array = [];
        for (let i = 0; i < countStars; i++) {
            array.push(
                <GridCol key={`start_${i}`} className='stars'>
                    <FontAwesome
                        name={startPosition >= i ? 'star' : 'star-o'}
                        onClick={() => {
                            this.setState({startPosition: i});
                            onChange(i+1)
                        }}
                    />
                </GridCol>
            )
        }
        return array
    }

    render() {

        const {title} = this.props;

        return (
            <div>
                <ContentBlockTitle className='content_block_title'>{title}</ContentBlockTitle>
                <ContentBlock>
                    <GridRow>
                        {this.stars()}
                    </GridRow>
                </ContentBlock>
            </div>
        )
    }
}


class Rating5Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstStars: 0,
            secondStars: 0,
            picker_modal: false
        }

    }

    saveRating(key, i) {

        const { firstStars, secondStars } = this.state,
            { add_rating, testN } = this.props;

        let new_state = Object.assign({firstStars, secondStars}, {[key]: i}),
            picker_modal = true;

        add_rating(testN, new_state);

        if (new_state.firstStars !== 0 && new_state.secondStars !== 0)
            picker_modal = false;

        this.setState({...new_state, picker_modal});
    }

    nextTest() {

        const { firstStars, secondStars } = this.state,
            { testN, nextTest } = this.props;

        if (firstStars !== 0 && secondStars !== 0) {
            setTimeout(() => nextTest(testN), 200)
        }
    }

    render() {

        const { children, firstTitle, lastTitle, testN } = this.props,
            { firstStars, secondStars, picker_modal } = this.state;

        return (
            <ContentBlock>
                <TestBtnNext testN={testN} onClick={() => this.setState({picker_modal: true})}/>
                <PickerModal opened={picker_modal} onPickerClosed={() => this.nextTest()}>
                    <Toolbar>
                        <Link color="gray">{children}</Link>
                        <Link onClick={() => this.setState({picker_modal: false})}>
                            Закрыть
                        </Link>
                    </Toolbar>
                    <Page>
                        <Stars
                            countStars={5}
                            initStars={firstStars}
                            onChange={i => this.saveRating('firstStars', i)}
                            title={firstTitle}
                        />
                        <Stars
                            countStars={5}
                            initStars={secondStars}
                            onChange={i => this.saveRating('secondStars', i)}
                            title={lastTitle}
                        />
                    </Page>
                </PickerModal>
            </ContentBlock>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Rating5Stars);
