import React, { Component } from 'react';


class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: '0',
            height: '0',
            imgStyle: {}
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

        const { height } = this.state;

        if (img.offsetHeight > height/2) {
            this.setState({imgStyle: {height: height*0.5}})
        }
    }

    render() {

        const { src } = this.props,
            { imgStyle } = this.state;

        return (
            <div
                className="text-center"
                style={{marginTop: 5, marginBottom: 5}}
            >
                <img
                    onLoad={this.onImgLoad}
                    src={src}
                    className="img-fluid"
                    style={imgStyle}
                    alt='Test Fonov'
                />
            </div>
        );
    }

}

export default Image