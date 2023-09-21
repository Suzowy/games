import React, { useState, useEffect, useCallback } from "react";
import "./Hangman.css";

const backgroundStyle = {
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "70vh",
  animation: "fadeIn 1.5s ease-in-out forwards",
};

const hangmanStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const hangmanPartStyles = {
  fontFamily: "monospace",
  fontSize: "24px",
};

const Hangman = () => {
  const [words] = useState([
    "coche",
    "perro",
    "gato",
    "mesa",
    "letra",
    "playa",
    "flor",
    "sol",
    "mar",
    "libro",
    "casa",
    "tren",
    "agua",
    "cielo",
    "montaña",
    "luna",
    "pintura",
    "computadora",
    "musica",
    "comida",
    "pepino",
    "correveidiles",
  ]);
  const [selectedWord, setSelectedWord] = useState("");
  const [hiddenWord, setHiddenWord] = useState("");
  const [usedLetters, setUsedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(10);
  const [gameMessage, setGameMessage] = useState("");
  const [hangmanState, setHangmanState] = useState(0);

  const chooseRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toLowerCase());
  }, [words]);

  const generateHiddenWord = useCallback(() => {
    const hidden = selectedWord
      .split("")
      .map((letter) => "_")
      .join("");
    setHiddenWord(hidden);
  }, [selectedWord]);

  const handleLetterInput = (letter) => {
    const used = usedLetters.includes(letter);
    if (!used) {
      setUsedLetters([...usedLetters, letter]);
      const newHiddenWord = hiddenWord
        .split("")
        .map((char, index) => {
          if (selectedWord.charAt(index) === letter) {
            return letter;
          }
          return char;
        })
        .join("");
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
    setGameMessage("");
    setHangmanState(0);
  }, [chooseRandomWord]);

  useEffect(() => {
    chooseRandomWord();
    generateHiddenWord();
  }, [chooseRandomWord, generateHiddenWord]);

  useEffect(() => {
    console.log("remainingAttempts:", remainingAttempts);
    if (hiddenWord === selectedWord) {
      setGameMessage("¡Has ganado!");
    } else if (remainingAttempts === 0) {
      setGameMessage(`Has perdido... La palabra era "${selectedWord}".`);
    }
  }, [hiddenWord, remainingAttempts, selectedWord]);

  const renderVerticalHangman = () => {
    const parts = [
      "   😵‍💫   ", // Cabeza
      "   |   ", // Cuerpo
      "  /|\\  ", // Brazos
      "   |   ", // Torso
      "  / \\  ", // Piernas
    ];

    const visibleParts = parts.slice(0, hangmanState);

    return (
      <div className="vertical-hangman" style={hangmanStyles}>
        <pre style={hangmanPartStyles}>
          {visibleParts.map((part) => (
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
        {renderVerticalHangman()}
        <h2>Palabra: {hiddenWord}</h2>
        <p>Letras utilizadas: {usedLetters.join(", ")}</p>
        <div className="letter-buttons">
          {Array.from(Array(26), (_, i) =>
            String.fromCharCode("a".charCodeAt(0) + i)
          ).map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterInput(letter)}
              disabled={
                usedLetters.includes(letter) ||
                gameMessage ||
                hiddenWord === selectedWord
              }
            >
              {letter}
            </button>
          ))}
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
    </div>
  );
};

export default Hangman;
