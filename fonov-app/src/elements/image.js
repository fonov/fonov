import React, { Component } from 'react';
import {APP_NAME} from '../constant/config'
import windowSize from 'react-window-size';


class Image extends Component {

    resize() {
        const {width, height, windowWidth, windowHeight} = this.props;

        if (width > height) {
            return {width: '100%', maxWidth: width > windowWidth/2 ? width/2 : width};
        } else {
            return {height: '100%', maxHeight: height >= windowHeight/2 ? height/2: height}
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