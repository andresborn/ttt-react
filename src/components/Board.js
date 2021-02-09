import React, { Component } from "react";
import Square from "./Square.js";

export class Board extends Component {
  constructor(props) {
    super(props);
    this.handleName1 = this.handleName1.bind(this);  // Bind our methods to our scope
    this.handleName2 = this.handleName2.bind(this);  // so, when calling `this`, we refer to
    this.restart = this.restart.bind(this);          // this state
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      xIsNext: true,
      name1: "",
      name2: "",
    };
  }

  handleClick(i) {
    if (this.state.squares[i] || checkWinner(this.state.squares)) {
      return;  // if square is filled or there's a winner, don't do anything
    } else {
      const squares = this.state.squares.slice(); // create new squares to then assign to state good practice for "time traveling"
      squares[i] = this.state.xIsNext ? "X" : "O"; // Assign to square the X or O, depending on who's turn it is

      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  }

  handleName1(e) {
    this.setState({ name1: e.target.value });
  }
  handleName2(e) {
    this.setState({ name2: e.target.value });
  }

  restart() {
    this.setState({squares: [null, null, null, null, null, null, null, null, null],
      xIsNext: true,})
  }

  render() {
    let winner = checkWinner(this.state.squares);
    let status;
    if (winner) {
      status =
        winner === "X"
          ? `The winner is ${this.state.name1}` // render player names
          : `The winner is ${this.state.name2}`;
    } else {
        if(this.state.name1 === "" || this.state.name2 === "") {
            // if empty don't render names
        } else {
            status = this.state.xIsNext
        ? `It is ${this.state.name1}'s turn` // conditionally render who's turn it is
        : `It is ${this.state.name2}'s turn`;
        }
    }

    return (
      <div className="board">
        <div className="banner">
          <p className="display">{status}</p>
          <div className="names-row">
            <input
            className="name"
              type="text"
              value={this.state.name1}
              onChange={this.handleName1}
              placeholder="Player 1"
            />
            <input
            className="name"
              type="text"
              value={this.state.name2}
              onChange={this.handleName2}
              placeholder="Player 2"
            />
          </div>
        </div>
        <button className="reset" onClick={this.restart}>Play again</button>
        <div className="row">
          <Square
            value={this.state.squares[0]}
            onClick={() => this.handleClick(0)}
          />
          <Square
            value={this.state.squares[1]}
            onClick={() => this.handleClick(1)}
          />
          <Square
            value={this.state.squares[2]}
            onClick={() => this.handleClick(2)}
          />
        </div>
        <div className="row">
          <Square
            value={this.state.squares[3]}
            onClick={() => this.handleClick(3)}
          />
          <Square
            value={this.state.squares[4]}
            onClick={() => this.handleClick(4)}
          />
          <Square
            value={this.state.squares[5]}
            onClick={() => this.handleClick(5)}
          />
        </div>
        <div className="row">
          <Square
            value={this.state.squares[6]}
            onClick={() => this.handleClick(6)}
          />
          <Square
            value={this.state.squares[7]}
            onClick={() => this.handleClick(7)}
          />
          <Square
            value={this.state.squares[8]}
            onClick={() => this.handleClick(8)}
          />
        </div>
      </div>
    );
  }
}

export default Board;


const checkWinner = (squares) => {
  const winningConditions = [
    [0, 1, 2], // top horizontal
    [3, 4, 5], // mid horizontal
    [6, 7, 8], // bottom horizontal
    [0, 3, 6], // left vertical
    [1, 4, 7], // center vertical
    [2, 5, 8], // right vertical
    [0, 4, 8], // top left to bottom right diagonal
    [2, 4, 6], // top right to bottom left diagonal
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    } 
  }
  return null;
}