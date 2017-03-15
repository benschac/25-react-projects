import React from 'react';

import Pixel from './Pixel.jsx';

class Board extends React.Component {

    render() {
        return (<div>
            {this.props.pixels.map(d=>{
                return <Pixel alive={d.alive} />;
            })}
        </div>);
    }
}

export default Board;