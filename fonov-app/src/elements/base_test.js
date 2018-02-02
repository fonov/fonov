import React, {Component} from "react";
import {
    NavRight, Link, Navbar,
    NavLeft, NavCenter, Progressbar,
    Views, View, Page, Pages
} from 'framework7-react';
import {connect} from "react-redux";


class BaseTest extends Component {

    render() {

        const {test, schemeOfTest, title, children, testCount} = this.props,
            testNumber = schemeOfTest.indexOf(test)+1;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>
                            {title}
                        </NavCenter>
                        <NavRight>
                            <Link>{`${testNumber}/${testCount}`}</Link>
                        </NavRight>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Progressbar progress={Math.floor(testNumber/testCount*100)} color={'red'}>21</Progressbar>
                            {children}
                        </Page>
                    </Pages>
                </View>
            </Views>
        );
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