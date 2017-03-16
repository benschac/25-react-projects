import React from 'react';

import Pixel from './Pixel.jsx';

class Board extends React.Component {

    render() {
        let { toggleLife, size, pixels, pixelSize } = this.props;
        return (<div className="board">
            {pixels.map((d,i)=>{
                return <Pixel
                    x={d.x}
                    y={d.y}
                    key={i}  //`${d.x}.${d.y}`
                    alive={d.alive}
                    pixelSize={pixelSize}
                    toggleLife={toggleLife} />;
            })}
        </div>);
    }
}

export default Board;