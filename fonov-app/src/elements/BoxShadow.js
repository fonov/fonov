import React from 'react';
import cssShadow from 'css-box-shadow'


const BoxShadow = ({
                       is = 'div',
                       inset = false,
                       offsetX = 0,
                       offsetY = 0,
                       blurRadius = 4,
                       spreadRadius = 0,
                       color = 'rgba(0,0,0,.5)',
                       style,
                       ...props
                   }) => {
    const Component = is;
    const sx = {
        ...style,
        boxShadow: cssShadow.stringify([
            {
                inset,
                offsetX,
                offsetY,
                blurRadius,
                spreadRadius,
                color
            }
        ])
    };
    return <Component style={sx} {...props} />
};

export default BoxShadow