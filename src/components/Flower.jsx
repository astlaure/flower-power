import React from 'react';

const Flower = (props) => {
    const { position, light } = props;
    let display = undefined;
    if (light) {
        display = { display: 'none' };
    }

    return (
        <div className="container" style={position}>
            <div className="glass" style={display}></div>
            <div className="thorns">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="glow" style={display}></div>
            <div className="rose-leaves">
                <div></div>
                <div></div>
            </div>
            <div className="rose-petals">
                <div></div>
                <div style={display}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="sparkles">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Flower;