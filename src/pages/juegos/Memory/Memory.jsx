import React, { useState, useEffect } from "react";
import "./Memory.css";

const imagePaths = [
  "helado.jpg",
  "rayo.jpg",
  "smile.jpg",
  "pizza.jpg",
  "burguer.jpg",
  "foto.jpg",
  "patatas.jpg",
  "fantasma.jpg",
];

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const getImageName = (path) => {
  const parts = path.split("/");
  const fileName = parts[parts.length - 1];
  return fileName.split(".")[0];
};

const Card = ({ id, imagePath, onClick, flipped }) => {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => onClick(id)}
    >
      <div className="card-inner">
        <div className="back">
          <img
            src={process.env.PUBLIC_URL + imagePath}
            alt="back"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="front">
          <img
            src={process.env.PUBLIC_URL + "back.jpg"}
            alt="front"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

const Memory = () => {
  const [cards, setCards] = useState([]);
  const [canFlip, setCanFlip] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10);
  const [matchedCards, setMatchedCards] = useState([]);
  const [, setGameWon] = useState(false);

  useEffect(() => {
    const shuffledImages = shuffleArray([...imagePaths, ...imagePaths]);
    const initialCards = shuffledImages.map((imagePath, index) => ({
      id: index,
      imagePath,
      name: getImageName(imagePath),
      flipped: false,
    }));
    setCards(initialCards);

    const revealAllCards = () => {
      const updatedCards = initialCards.map((card) => ({
        ...card,
        flipped: true,
      }));
      setCards(updatedCards);
      setCanFlip(false);

      const timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timerInterval);
            setCanFlip(true);
          }
          return prevTime - 0.5;
        });
      }, 1000);

      setTimeout(() => {
        const resetCards = updatedCards.map((card) => ({
          ...card,
          flipped: false,
        }));
        setCards(resetCards);
      }, 10000);
    };

    revealAllCards();
  }, []);

  const handleCardClick = (clickedId) => {
    if (!canFlip) {
      return;
    }

    const clickedCard = cards.find((card) => card.id === clickedId);

    if (clickedCard.flipped || matchedCards.includes(clickedCard.name)) {
      return;
    }

    const updatedCards = cards.map((card) =>
      card.id === clickedId ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);

    const flippedUnmatchedCards = updatedCards.filter(
      (card) => card.flipped && !matchedCards.includes(card.name)
    );

    if (flippedUnmatchedCards.length === 2) {
      const [firstCard, secondCard] = flippedUnmatchedCards;
      if (firstCard.name === secondCard.name) {
        setMatchedCards([...matchedCards, firstCard.name]);
      } else {
        setCanFlip(false);
        const mismatchTimeout = setTimeout(() => {
          const resetCards = updatedCards.map((card) =>
            !matchedCards.includes(card.name)
              ? { ...card, flipped: false }
              : card
          );
          setCards(resetCards);
          setCanFlip(true);
        }, 1000);
        return () => clearTimeout(mismatchTimeout);
      }
    }

    // Verifica si todas las cartas están emparejadas
    if (matchedCards.length === imagePaths.length) {
      setGameWon(true);
    }
  };

  const restartGame = () => {
    // Reinicia el juego
    const shuffledImages = shuffleArray([...imagePaths, ...imagePaths]);
    const resetCards = shuffledImages.map((imagePath, index) => ({
      id: index,
      imagePath,
      name: getImageName(imagePath),
      flipped: false,
    }));
    setCards(resetCards);
    setCanFlip(true);
    setTimeLeft(10);
    setMatchedCards([]);
    setGameWon(false);
  };

   return (
    <div>
      <div className="board">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imagePath={card.imagePath}
            name={card.name}
            flipped={card.flipped}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <div className={`timer ${timeLeft <= 0 ? "hidden" : ""}`}>
        {timeLeft}
      </div>
      {matchedCards.length === imagePaths.length && (
        <div className="game-won">
          <h2>¡Has ganado!</h2>
          <button onClick={restartGame}>Volver a jugar</button>
        </div>
      )}
    </div>
  );
};
export default Memory;
