import React, {Component} from "react";
import Pressure from 'react-pressure';


class Cycle3DTouch extends Component {

    render() {

        const {force} = this.props;

        return (
            <div className="cycle_3d_touch" style={{backgroundColor: `rgba(255,59,48, ${force})`}}/>
        );
    }
}
const configs = {
    polyfill: false,
    only: "touch"
};

export default Pressure(Cycle3DTouch, configs);