import React, { useState, useEffect, useCallback } from "react";
import "./Hangman.css";

const backgroundStyle = {
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "70vh",
  animation: "fadeIn 1.5s ease-in-out forwards",
};


const Hangman = () => {
  const [words] = useState([
    "abrigo",
    "aceite",
    "acuario",
    "alarma",
    "ángel",
    "anillo",
    "ardilla",
    "arroz",
    "barco",
    "botella",
    "bufanda",
    "caballo",
    "cama",
    "cámara",
    "carne",
    "cartera",
    "cerveza",
    "chocolate",
    "cigarrillo",
    "ciudad",
    "cuchillo",
    "delfín",
    "elefante",
    "escoba",
    "estrella",
    "faro",
    "fruta",
    "globo",
    "gorila",
    "guitarra",
    "helado",
    "helicóptero",
    "hoja",
    "huevo",
    "insecto",
    "isla",
    "joya",
    "kiwi",
    "lámpara",
    "limón",
    "llave",
    "maleta",
    "manzana",
    "mapa",
    "mascota",
    "montaña",
    "nube",
    "ojo",
    "oreja",
    "palmera",
    "pantalón",
    "pájaro",
    "papel",
    "paraguas",
    "parque",
    "pastel",
    "pato",
    "pelota",
    "pera",
    "piña",
    "plátano",
    "queso",
    "rana",
    "reloj",
    "robot",
    "sandía",
    "serpiente",
    "sillón",
    "sol",
    "sombrero",
    "taza",
    "teléfono",
    "tiburón",
    "tierra",
    "tigre",
    "toalla",
    "tortuga",
    "traje",
    "uva",
    "vaso",
    "vela",
    "vestido",
    "volcán",
    "zanahoria",
    "zapato",
    "zorro",
    "abanico",
    "amistad",
    "búho",
    "calcetín",
    "camión",
    "cereza",
    "crucigrama",
    "dama",
    "dedo",
    "dinosaurio",
    "excursión",
  ]);
  const [selectedWord, setSelectedWord] = useState("");
  const [hiddenWord, setHiddenWord] = useState("");
  const [usedLetters, setUsedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(10);
  const [gameMessage, setGameMessage] = useState("");
  const [hangmanState, setHangmanState] = useState(0);
  const [hangmanImage, setHangmanImage] = useState("horca.jpg");
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
        setHangmanState(hangmanState + 1);
        // Cambiar la imagen en función de los fallos
        if (hangmanState === 0) {
          setHangmanImage("1fallo.jpg");
        } else if (hangmanState === 1) {
          setHangmanImage("2fallos.jpg");
        } else if (hangmanState === 2) {
          setHangmanImage("3fallos.jpg");
        } else if (hangmanState === 3) {
          setHangmanImage("4fallos.jpg");
        } else if (hangmanState === 4) {
          setHangmanImage("5fallos.jpg");
        } else if (hangmanState === 5) {
          setHangmanImage("6fallos.jpg");
        } else if (hangmanState === 6) {
          setHangmanImage("7fallos.jpg");
        } else if (hangmanState === 7) {
          setHangmanImage("muerto.jpg");
        }
      }
    }
  };

  const handleRestart = useCallback(() => {
    chooseRandomWord();
    setUsedLetters([]);
    setRemainingAttempts(9);
    setGameMessage("");
    setHangmanState(0);
    setHangmanImage("horca.jpg");
  }, [chooseRandomWord]);

  useEffect(() => {
    chooseRandomWord();
    generateHiddenWord();
  }, [chooseRandomWord, generateHiddenWord]);

  useEffect(() => {
    if (hiddenWord === selectedWord) {
      setGameMessage("¡Has ganado!");
    } else if (remainingAttempts === 0) {
      setGameMessage(`Has perdido... La palabra era "${selectedWord}".`);
    }
  }, [hiddenWord, remainingAttempts, selectedWord]);

  return (
    <div style={backgroundStyle}>
      <div className="hangman-container">
        <h3>Intentos restantes: {remainingAttempts}</h3>
        <img
          src={hangmanImage}
          alt="Ahorcado"
          style={{ width: "200px", height: "250px" }}
        />
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
                className="bi bi-house-door"
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
