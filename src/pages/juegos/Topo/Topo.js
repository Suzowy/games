import React, { useState, useEffect } from 'react';
import './Topo.css';
import moleImage from './mole.png';
import dirtImage from './dirt.png';

function Topo() {
  const [score, setScore] = useState(0);
  const [holeWithMole, setHoleWithMole] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const showMole = () => {
    const randomIndex = Math.floor(Math.random() * 9);
    setHoleWithMole(randomIndex);

    setTimeout(() => {
      setHoleWithMole(null);
    }, 1000);

    setTimeout(() => {
      if (!gameOver) {
        showMole();
      }
    }, 2000);
  };

  useEffect(() => {
    showMole();

    const countdownInterval = setInterval(() => {
      if (timeLeft > 0 && !gameOver) {
        setTimeLeft(timeLeft - 1);
      } else {
        setGameOver(true);
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, gameOver]);

  const handleMoleClick = (index) => {
    if (index === holeWithMole) {
      setScore(score + 1);
      setHoleWithMole(null);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setGameOver(false);
    setTimeLeft(60);
    showMole();
  };

  const gameMessage = gameOver ? 'Juego terminado' : '';

  return (
    <div className="Topo">
      <p>Puntuación: {score}</p>
      <p>tiempo restante: {timeLeft} segundos</p>
      {gameOver ? (
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
              className="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>{' '}
            Ir a inicio
          </a>
        </div>
      ) : (
        <div className="game-container">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
              key={index}
              className={`hole ${holeWithMole === index ? 'up' : ''}`}
              onClick={() => handleMoleClick(index)}
            >
              <div className="dirt">
                <img src={dirtImage} alt="Dirt" />
              </div>
              {holeWithMole === index && (
                <div className="mole">
                  <img src={moleImage} alt="Mole" style={{ width: '100px', height: 'auto' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Topo;
