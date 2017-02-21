import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
      squares: Array(9).fill(null)
    }
  }
  renderSquare(i) {
    {/* Takes in param, sets value */}
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
  }
  // passed into render square which is passed to component.
  handleClick(i) {
    // clone state;
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    // es6 short cut.
    this.setState({squares});
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
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
