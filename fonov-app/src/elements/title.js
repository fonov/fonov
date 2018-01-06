import React, { Component } from 'react';


class Title extends Component {

    render() {

        const { children } = this.props;

        return (
            <div>
                <h1 style={{textAlign: 'center'}}>{children}</h1>
                <hr/>
            </div>
        );
    }

}

export default Title