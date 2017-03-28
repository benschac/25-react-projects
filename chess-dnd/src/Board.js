import React, { Component, PropTypes } from 'react';
import Square from './Square';
import Knight from './Knight';


class Board extends Component {
    static propTypes = {
        knightPosition: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    }
    render() {
        return (
            <Square black>
                <Knight />
            </Square>
        );
    }
}

export default Board;