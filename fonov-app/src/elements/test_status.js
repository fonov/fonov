import React, {Component} from "react";
import {NavRight, Link} from 'framework7-react';
import {connect} from "react-redux";
import {getTranslate} from "react-localize-redux/lib/index";


class TestStatus extends Component {

    render() {

        const {test, schemeOfTest} = this.props;

        return (
            <NavRight>
                <Link>{`${schemeOfTest.indexOf(test)+1}/${schemeOfTest.length}`}</Link>
            </NavRight>
        )
    }
}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        schemeOfTest: state.test.scheme
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TestStatus);