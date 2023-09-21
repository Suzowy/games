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
  const [, setTimeLeft] = useState(5);
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
      }, 2000);
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
    setTimeLeft(0);
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
      {matchedCards.length === imagePaths.length && (
        <div className="game-won">
          <h2>¡Has ganado!</h2>
          <button onClick={restartGame}>Volver a jugar</button>
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
};
export default Memory;
