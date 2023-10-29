import React, { useState, useEffect, useCallback } from "react";
import "./Tres.css";

const backgroundStyle = {
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "70vh",
  animation: "fadeIn 1.5s ease-in-out forwards",
};

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isStarted, setIsStarted] = useState(false);
  const [gameMessage, setGameMessage] = useState("");
  const [hasMoved, setHasMoved] = useState(false);

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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const calculateBestMove = (squares) => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        const squaresCopy = [...squares];
        squaresCopy[i] = "O";
        if (calculateWinner(squaresCopy) === "O") {
          return i;
        }
      }
    }

    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        const squaresCopy = [...squares];
        squaresCopy[i] = "X";
        if (calculateWinner(squaresCopy) === "X") {
          return i;
        }
      }
    }

    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        return i;
      }
    }
    return -1;
  };

  const handleRestart = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setIsStarted(false);
    setGameMessage("");
    setHasMoved(false);
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
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setHasMoved(true);
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => handleClick(i)}>
      {hasMoved && board[i] ? (
        <img
          src={board[i] === "X" ? "x.jpg" : "o.jpg"}
          alt={board[i]}
          style={{ width: "100%", height: "100%" }}
        />
      ) : null}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Es el turno de: ${currentPlayer}`;

  useEffect(() => {
    if (winner) {
      setGameMessage(`¡El jugador ${winner} ha ganado!`);
    } else if (!board.includes(null)) {
      setGameMessage("¡Empate! El juego ha terminado sin un ganador.");
    } else if (currentPlayer === "O") {
      // Llamada a la función para que juegue la máquina
      const computerMove = calculateBestMove(board);
      if (computerMove >= 0) {
        setTimeout(() => handleClick(computerMove), 1000);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <button className="restart-button" onClick={handleRestart}>
            Volver a jugar
          </button>
          <a href="/" className="backHome">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>{" "}
            Ir a inicio
          </a>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;

