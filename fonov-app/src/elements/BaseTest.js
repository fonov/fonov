import React, {Component} from 'react'
import {Base} from './index'
import {Navbar, Badge, NavbarBrand, Progress} from 'reactstrap'
import {APP_NAME} from "../constant/config";
import {connect} from "react-redux";
import {RatingCheck, Rating5Stars} from './rating/index'


class BaseTest extends Component {

    render() {

        const {test, schemeOfTest, Title = APP_NAME, children, testCount, extraStyle = {},
                rating_check = false, rating_5_stars = false, rating_question, block_rating = true,
                block_testStatus = true} = this.props,
            testNumber = schemeOfTest.indexOf(test)+1,
            percenComplete = Math.floor(testNumber/testCount*100);

        return (
            <Base
                nav={(
                    <div style={extraStyle}>
                        <Navbar light color='light'>
                            <NavbarBrand>
                                {Title}
                            </NavbarBrand>
                            {
                                block_testStatus ? (
                                    <NavbarBrand>
                                        <Badge color="primary">
                                            {`${testNumber}/${testCount}`}
                                        </Badge>
                                    </NavbarBrand>
                                ) : null
                            }
                        </Navbar>
                        {
                            block_testStatus ? (
                                <Progress value={percenComplete} className='progress-nav' />
                            ) : null
                        }
                    </div>
                )}
            >
                {children}
                {
                    rating_check && block_rating ? (
                        <RatingCheck testN={test} {...rating_check} style={extraStyle}>
                            {rating_question}
                        </RatingCheck>
                    ) : null
                }
                {
                    rating_5_stars && block_rating ? (
                        <Rating5Stars testN={test} {...rating_5_stars} style={extraStyle}>
                            {rating_question}
                        </Rating5Stars>
                    ) : null
                }
            </Base>
        )
    }
}

const mapStateToProps = state => {
    return {
        schemeOfTest: state.test.scheme,
        testCount: state.test.scheme.length
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseTest);