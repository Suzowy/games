import React, { useState, useEffect } from "react";
import sudoku from "sudoku";
import "./Sudoku.css";

const backgroundstyle = {
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "70vh",
  animation: "fadeIn 1.5s ease-in-out forwards",
};

function Sudoku() {
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [sudokuSolved, setSudokuSolved] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const newBoard = sudoku.makepuzzle();
    setSudokuBoard(newBoard);
    setSudokuSolved(sudoku.solvepuzzle(newBoard));
    setGameOver(false);
  }, []);

  const handleCellChange = (index, event) => {
    const value = parseInt(event.target.value);
    const newBoard = [...sudokuBoard];
    newBoard[index] = isNaN(value) ? null : value;
    setSudokuBoard(newBoard);
  };

  const handleCheckSolution = () => {
    const isSolutionCorrect = sudokuBoard.every(
      (cell, index) => cell === sudokuSolved[index]
    );
    setGameOver(true);
    if (isSolutionCorrect) {
      alert("¡Felicidades! Has resuelto el sudoku correctamente.");
    } else {
      alert("Lo siento, la solución no es correcta. ¡Inténtalo de nuevo!");
    }
  };

  const handleNewGame = () => {
    const newBoard = sudoku.makepuzzle();
    setSudokuBoard(newBoard);
    setSudokuSolved(sudoku.solvepuzzle(newBoard));
    setGameOver(false);
  };

  return (
    <div style={backgroundstyle}>
      <div className="sudoku">
        {sudokuBoard && (
          <div className="sudoku-board">
            {sudokuBoard.map((cell, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={cell || ""}
                disabled={gameOver}
                onChange={(event) => handleCellChange(index, event)}
              />
            ))}
          </div>
        )}
        <div className="sudoku-controls">
          <button onClick={handleCheckSolution} disabled={gameOver}>
            Comprobar solución
          </button>
          <button onClick={handleNewGame}>Nueva partida</button>
        </div>
      </div>
    </div>
  );
}

export default Sudoku;
