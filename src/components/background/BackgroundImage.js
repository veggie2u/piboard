import React, { Component } from 'react';

const IMAGES = {
    1: require('./images/Fire-in-the-sky.jpg'),
    2: require('./images/Forest-Road.jpg')
};

export const getImage = id => {
    const image = IMAGES[id];
    if (!image) {
        throw new Error(`The image ${id} was not found`);
    }
    return image;
};

class Background extends Component {

    render() {
        const style = {
            backgroundColor: 'yellow',
            backgroundImage: 'url(' + getImage(1) + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
            height: '100%'
        };

        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Background;
