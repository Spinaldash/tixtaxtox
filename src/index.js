import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" 
        onClick={() => { this.props.onClick()} }
      >
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    squares: Array(9).fill(null),
    turnOwner: "O"
  };
  this.handleClick = function(i){
    console.log('HandleClick')
    console.log('this.state: ', this.state)
    console.log('i: ', i)
    this.state.squares[i] ? console.log('this is filled space: ', this.state.squares[i]) : this.stamp(i)
  }
  
  this.stamp = function(i) {
    const tempSquares = this.state.squares.slice();
    let currentStamp = this.state.turnOwner;
    tempSquares[i] = currentStamp;
    if (currentStamp === 'X') {
      this.state.turnOwner = 'O'
    } else {
      this.state.turnOwner = 'X'
    }
    this.setState ({squares: tempSquares});
    
  }
}
  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} 
    />;
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
