import React from 'react';

import Pixel from './Pixel.jsx';

class Board extends React.Component {

    render() {
        let { toggleLife, size, pixels, pixelSize } = this.props;
        return (<div className="board">
            {pixels.map((d,i)=>{
                let x = i % size;
                let y = Math.floor(i / size);
                return <Pixel
                    x={x}
                    y={y}
                    key={`${x}.${y}`} 
                    alive={d.alive}
                    pixelSize={pixelSize}
                    toggleLife={toggleLife} />;
            })}
        </div>);
    }
}

export default Board;