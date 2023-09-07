import React, { useState, useEffect } from 'react';
import './Tres.css';

const backgroundstyle = {
  backgroundImage: 'url("https://w.forfun.com/fetch/33/33658246d3edb0759f6ed1bd9059d395.jpeg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted || currentPlayer !== 'O') {
      return;
    }

    const computerMoveTimeout = setTimeout(() => {
      const emptySquares = board.reduce((acc, value, index) => {
        if (value === null) {
          acc.push(index);
        }
        return acc;
      }, []);

      if (emptySquares.length > 0) {
        const computerChoice = calculateBestMove(board, 'O');
        const boardCopy = [...board];
        boardCopy[computerChoice] = 'O';
        setBoard(boardCopy);
        setCurrentPlayer('X');
      }
    }, 1000); // Un retraso de 1 segundo (ajusta según lo necesario)

    return () => clearTimeout(computerMoveTimeout);
  }, [currentPlayer, isStarted, board]);

  const handleClick = (i) => {
    if (!isStarted) {
      setIsStarted(true);
    }
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[i]) {
      return;
    }
    boardCopy[i] = currentPlayer;
    setBoard(boardCopy);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => handleClick(i)}>
      {board[i]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

  return (
    <div style={backgroundstyle}>
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => setBoard(Array(9).fill(null))}>Reset</button>
        </div>
      </div>
    </div>
  );
}

const calculateWinner = (squares) => {
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
};

const calculateBestMove = (board, player) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return i;
    }
  }
  return null;
};

export default TicTacToe;




