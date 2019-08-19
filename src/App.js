import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: 'X',
      winner: ''
    }
  }

  handleClick = (event, index) => {
    event.preventDefault();
    if (!this.state.winner) {
      let newBoard = [...this.state.board];
      if (newBoard[index] === null) {
      newBoard[index] = this.state.player;
        this.setState({ board: newBoard, player: this.state.player === 'X' ? 'O' : 'X' }, () => { this.checkWinningCombination() });
      }
    }
  }

  reset = (e) => {
    e.preventDefault();
    this.setState({ board: Array(9).fill(null), winner: null, player: 'X' })
  }

  checkWinningCombination = () => {
    let winCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winCombination.length; i++) {
      const [a, b, c] = winCombination[i];
      let board = this.state.board
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({ winner: this.state.player === 'X' ? 'O' : 'X' }, () => { alert(this.state.winner + ' wins'); });

      }
    }
  }

  render() {
    return (

      <div className="App">
        <h1>TIC TAC TOE</h1>
        <div className="board">
          {this.state.board.map((box, index) => {
            return (
              <div key={index} className="box" onClick={(event) => this.handleClick(event, index)}>{box}</div>
            )
          })}

        </div>
        <Button onClick={this.reset} style={{ marginTop: '25px' }}> Restart Game </Button>
      </div>
    );
  }
}

export default App;
