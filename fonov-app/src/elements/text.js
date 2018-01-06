import React, { Component } from 'react';


class Text extends Component {

    render() {

        const { children } = this.props;

        return (
            <p style={{marginTop: 10, marginBottom: 10}}>
                {children}
            </p>
        );
    }

}

export default Text