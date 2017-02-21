import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
      squares: Array(9).fill(null),
      xIsNext: true
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
    // game was won or it's been clicked before.
    if(calculateWinner(this.state.squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    // es6 short cut.
    this.setState({squares,
                  xIsNext: !this.state.xIsNext});
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner) {
      status = `Player ${winner} has won the game`;
    } else {
      status = `Player ${this.state.xIsNext ? 'X' : 'O'}`;
    }

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

// Stateless functional Component
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
