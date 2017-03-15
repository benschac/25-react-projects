import React from 'react';
import Board from './Board';

class BoardContainer extends React.Component {

    render() {
        var { size, pixels, pixelSize, toggleLife } = this.props;
        return (
            <div className="boardContainer">
                <Board size={size}
                      pixelSize={pixelSize}
                      pixels={pixels}
                      toggleLife={toggleLife} />
            </div>
        )
    }
} 

export default BoardContainer;