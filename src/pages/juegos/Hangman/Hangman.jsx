import React, { useState, useEffect, useCallback } from 'react';
import './Hangman.css';

const backgroundStyle = {
  
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '70vh',
  animation: 'fadeIn 1.5s ease-in-out forwards',
};

const hangmanStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const hangmanPartStyles = {
  fontFamily: 'monospace',
  fontSize: '24px',
};

const Hangman = () => {
  const [words] = useState([
    'coche', 'perro', 'gato', 'mesa', 'letra', 'playa', 'flor', 'sol', 'mar',
    'libro', 'casa', 'tren', 'agua', 'cielo', 'montaña', 'luna', 'pintura',
    'computadora', 'musica', 'comida'
  ]);
  const [selectedWord, setSelectedWord] = useState('');
  const [hiddenWord, setHiddenWord] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameMessage, setGameMessage] = useState('');
  const [hangmanState, setHangmanState] = useState(0); // Estado del muñeco

  const chooseRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toLowerCase());
  }, [words]);

  const generateHiddenWord = useCallback(() => {
    const hidden = selectedWord.split('').map(letter => '_').join('');
    setHiddenWord(hidden);
  }, [selectedWord]);

  const handleLetterInput = (letter) => {
    const used = usedLetters.includes(letter);
    if (!used) {
      setUsedLetters([...usedLetters, letter]);
      const newHiddenWord = hiddenWord.split('').map((char, index) => {
        if (selectedWord.charAt(index) === letter) {
          return letter;
        }
        return char;
      }).join('');
      setHiddenWord(newHiddenWord);
      if (!newHiddenWord.includes(letter)) {
        setRemainingAttempts(remainingAttempts - 1);
        // Aumenta el estado del muñeco en 1 en cada error
        setHangmanState(hangmanState + 1);
      }
    }
  };

  const handleRestart = useCallback(() => {
    chooseRandomWord();
    setUsedLetters([]);
    setRemainingAttempts(10);
    setGameMessage('');
    setHangmanState(0);
  }, [chooseRandomWord]);

  useEffect(() => {
    chooseRandomWord();
    generateHiddenWord();
  }, [chooseRandomWord, generateHiddenWord]);

  useEffect(() => {
    console.log('remainingAttempts:', remainingAttempts);
    if (hiddenWord === selectedWord) {
      setGameMessage('¡Has ganado!');
    } else if (remainingAttempts === 0) {
      setGameMessage(`Has perdido... La palabra era "${selectedWord}".`);
      handleRestart();
    }
  }, [hiddenWord, remainingAttempts, selectedWord, handleRestart]);

  const renderVerticalHangman = () => {
    const parts = [
      '   😵‍💫   ', // Cabeza
      '   |   ',  // Cuerpo
      '  /|\\  ',  // Brazos
      '   |   ',  // Torso
      '  / \\  '   // Piernas
    ];

    const visibleParts = parts.slice(0, hangmanState);

    return (
      <div className="vertical-hangman" style={hangmanStyles}>
        <pre style={hangmanPartStyles}>
          {visibleParts.map(part => (
            <div key={part}>{part}</div>
          ))}
        </pre>
      </div>
    );
  };

  return (
    <div style={backgroundStyle}>
      <div className="hangman-container">
        <h3>Intentos restantes: {remainingAttempts}</h3>
        {renderVerticalHangman()} {/* Renderiza el muñeco del ahorcado verticalmente */}
        <h2>Palabra: {hiddenWord}</h2>
        <p>Letras utilizadas: {usedLetters.join(', ')}</p>
        <div className="letter-buttons">
          {Array.from(Array(26), (_, i) => String.fromCharCode('a'.charCodeAt(0) + i)).map(letter => (
            <button
              key={letter}
              onClick={() => handleLetterInput(letter)}
              disabled={usedLetters.includes(letter) || gameMessage || hiddenWord === selectedWord}
            >
              {letter}
            </button>
          ))}
        </div>
        <p className="game-message">{gameMessage}</p>
        <button className="restart-button" onClick={handleRestart}>Empezar de nuevo</button>
      </div>
    </div>
  );
};

export default Hangman;
