import React from 'react';

import Pixel from './Pixel.jsx';

class Board extends React.Component {

    render() {
        let { toggleLife, size, pixels } = this.props;
        return (<div>
            {pixels.map((d,i)=>{
                var x = i % size;
                var y = Math.floor(i / size);
                return <Pixel
                    x={x}
                    y={y}
                    key={`${x}.${y}`} 
                    alive={d.alive}
                    toggleLife={toggleLife} />;
            })}
        </div>);
    }
}

export default Board;