import React, { useState, useEffect, useCallback } from 'react';
import './Tres.css';

const backgroundStyle = {
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '70vh',
  animation: 'fadeIn 1.5s ease-in-out forwards',
};

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isStarted, setIsStarted] = useState(false);
  const [gameMessage, setGameMessage] = useState('');

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

  const calculateBestMove = (squares) => {
    // Primero, verificamos si hay un movimiento que pueda ganar el juego
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        const squaresCopy = [...squares];
        squaresCopy[i] = 'O';
        if (calculateWinner(squaresCopy) === 'O') {
          return i; // Este movimiento ganaría el juego
        }
      }
    }

    // Luego, verificamos si el oponente (jugador X) está a punto de ganar y lo bloqueamos
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        const squaresCopy = [...squares];
        squaresCopy[i] = 'X';
        if (calculateWinner(squaresCopy) === 'X') {
          return i; // Este movimiento bloquearía al jugador X de ganar
        }
      }
    }

    // Si no hay movimientos críticos, simplemente elegimos el primer espacio vacío
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        return i;
      }
    }

    // Si todas las casillas están ocupadas (raro), regresamos -1
    return -1;
  };

  const handleRestart = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setIsStarted(false);
    setGameMessage('');
  }, []);

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

  useEffect(() => {
    if (winner) {
      setGameMessage(`¡El jugador ${winner} ha ganado!`);
    } else if (!board.includes(null)) {
      setGameMessage('¡Empate! El juego ha terminado sin un ganador.');
    } else if (currentPlayer === 'O') {
      // Llamada a la función para que juegue la máquina
      const computerMove = calculateBestMove(board);
      if (computerMove >= 0) {
        setTimeout(() => handleClick(computerMove), 1000);
      }
    }
  }, [board, winner, currentPlayer]);

  return (
    <div style={backgroundStyle}>
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
        </div>
      </div>
      {gameMessage && (
        <div className="game-won">
          <h2>{gameMessage}</h2>
          <button className="restart-button" onClick={handleRestart}>Empezar de nuevo</button>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
