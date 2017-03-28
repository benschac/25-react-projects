import React, { Component, PropTypes } from 'react';

class Square extends Component {
    static propTypes = {
        black: PropTypes.bool
    };

    render() {
        const { black, children } = this.props;
        const fill = black ? 'black' : 'white';
        const stroke = black ? 'white' : 'black';
        return <div style={{
                    backgroundColor: fill,
                    color: stroke,
                    width: '100%',
                    height: '100%'
                }}>
                { children }
                </div>
    }
}

export default Square;