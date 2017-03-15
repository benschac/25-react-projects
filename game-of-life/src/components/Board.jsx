import React from 'react';

import Pixel from './Pixel.jsx';

class Board extends React.Component {

    render() {
        return (<div>
            {this.props.pixels.map((d,i)=>{
                var x = i % this.props.size;
                var y = Math.floor(i / this.props.size);
                return <Pixel
                    x={x}
                    y={y}
                    key={`${x}.${y}`} 
                    alive={d.alive} />;
            })}
        </div>);
    }
}

export default Board;