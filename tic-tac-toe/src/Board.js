import React from 'react';
import Square from './Square';

export default class Board extends React.Component {

  renderSquare(i) {
    {/* Takes in param, sets value */}
    const squares = this.props.squares;
    return <Square value={squares[i]} onClick={() => this.props.onClick(i)}/>;
  }
  // passed into render square which is passed to component.


  render() {


    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
