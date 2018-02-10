import React, { Component } from 'react';
import {APP_NAME} from '../constant/config'
import windowSize from 'react-window-size';


class Image extends Component {

    resize() {
        const {width, height, windowWidth, windowHeight} = this.props;

        if (width > windowWidth/2) {
            return {width: '100%', maxWidth: windowWidth/2};
        } else if (height > windowHeight/2) {
            return {height: '100%', maxHeight: windowHeight/2}
        } else {
            return {}
        }
    }

    render() {
        const {src} = this.props;

        return (
            <div className='text-center'>
                <img
                    className="rounded"
                    src={src}
                    style={this.resize()}
                    alt={APP_NAME}
                />
            </div>
        );
    }

}

export default windowSize(Image);