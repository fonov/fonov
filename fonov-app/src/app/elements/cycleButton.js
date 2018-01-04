import React, { Component } from 'react';
import {BoxShadow} from './index'


class CycleButton extends Component {

    render() {

        const {children, ...props} = this.props;

        return (
            <BoxShadow
                className='text-center text-white'
                spreadRadius={3}
                blurRadius={16}
                color='#067df7'
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    lineHeight: 6.5,
                    fontSize: '2em',
                    backgroundColor: 'DodgerBlue',
                    margin: '70px auto',
                    cursor: 'pointer'
                }}
                {...props}
            >
                {children}
            </BoxShadow>
        )
    }

}

export default CycleButton