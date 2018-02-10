import React, { Component } from 'react';
import {APP_NAME} from '../constant/config'


class Image extends Component {

    render() {
        const {src, width} = this.props;

        return (
            <div className='text-center'>
                <img
                    className="rounded"
                    src={src}
                    style={{width: '100%', maxWidth: width}}
                    alt={APP_NAME}
                />
            </div>
        );
    }

}

export default Image