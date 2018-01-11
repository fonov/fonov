import React, { Component } from 'react';
import {APP_NAME} from '../constant/config'


class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: '0',
            height: '0',
            imgStyle: {},
            visibility: 'hidden'
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    onImgLoad({target:img}) {

        const { height, width } = this.state;
        let new_state = {};

        if (img.offsetHeight > img.offsetWidth) {
            if (img.offsetHeight > height/2) {
                new_state = {imgStyle: {height: height*0.5}}
            }
        } else {
            if(img.offsetWidth > width) {
                new_state = {imgStyle: {width: width*0.8}}
            }
        }

        this.setState({...new_state, visibility: 'visible'})
    }

    render() {

        const { src } = this.props,
            { imgStyle, visibility } = this.state;

        return (
            <div style={{textAlign: 'center'}}>
                <img
                    onLoad={this.onImgLoad}
                    src={src}
                    style={{...imgStyle, visibility}}
                    alt={APP_NAME}
                />
            </div>
        );
    }

}

export default Image