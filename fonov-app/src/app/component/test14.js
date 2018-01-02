import React, { Component } from 'react';
import { connect } from 'react-redux'
import {REPLACE_ROUTE} from "../actions/route";


class Test14 extends Component {

    componentWillMount() {

        const { REPLACE_ROUTE } = this.props;

        REPLACE_ROUTE('Test15')
    }

    render() {
        return null
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        REPLACE_ROUTE: route => dispatch(REPLACE_ROUTE(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test14);