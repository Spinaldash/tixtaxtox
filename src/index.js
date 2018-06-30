import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {calculateWinner} from './app/helpers/helpers.js'

function Square(props) {
    return (
      <button className='square'
        onClick={props.onClick}
      >
        {props.value}
      </button>
    )
}


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  handleClick(i) {
    // Return early if there is a winner or on an already stamped square
    if (calculateWinner(this.state.squares) || this.state.squares[i]) {
      return;
    }
    // Stamp & switch turn logic
    const tempSquares = this.state.squares.slice();
    tempSquares[i] = this.state.xIsNext ? "X" : "O"
    this.setState ({
      squares: tempSquares,
      xIsNext: !this.state.xIsNext
    });
  }
  
  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    let status;
    let winner = calculateWinner(this.state.squares)
    winner ? status =  (winner + ' is the winner!') : status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");

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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
