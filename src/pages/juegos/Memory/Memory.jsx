import React, { useState, useEffect } from 'react';
import './Memory.css';

const imagePaths = [
  'helado.jpg',
  'rayo.jpg',
  'smile.jpg',
  'pizza.jpg',
  'burguer.jpg',
  'foto.jpg',
  'patatas.jpg',
  'fantasma.jpg',
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
  const parts = path.split('/');
  const fileName = parts[parts.length - 1];
  return fileName.split('.')[0]; // Elimina la extensión del archivo
};

const Card = ({ imagePath, onClick, flipped }) => {
  const [isFlipped, setFlipped] = useState(flipped);

  useEffect(() => {
    setFlipped(flipped);
  }, [flipped]);

  const handleClick = () => {
    if (!isFlipped) {
      setFlipped(true);
      onClick();
    }
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="front">
          <img
            src={process.env.PUBLIC_URL + imagePath}
            alt="Card"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="back">
          <img
            src={process.env.PUBLIC_URL + 'back.jpg'} // Cambia la imagen de la parte trasera si es necesario
            alt="Back"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

const Memory = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [canFlip, setCanFlip] = useState(true);

  useEffect(() => {
    const shuffledImages = shuffleArray([...imagePaths, ...imagePaths]);
    const initialCards = shuffledImages.map((imagePath, index) => ({
      id: index,
      imagePath,
      name: getImageName(imagePath), // Obtén el nombre único del archivo sin la extensión
      flipped: false, // Inicialmente, todas las tarjetas están en la parte trasera
    }));
    setCards(initialCards);
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false); // Desactiva la capacidad de voltear más tarjetas temporalmente

      const [firstCard, secondCard] = flippedCards;
      if (firstCard.name[0] === secondCard.name[0]) {
        // Coincidencia encontrada en la primera letra, deja las cartas volteadas
        setFlippedCards([]);
        setCanFlip(true); // Reactiva la capacidad de voltear tarjetas
      } else {
        // Sin coincidencia, voltea las tarjetas nuevamente después de un breve retraso
        const mismatchTimeout = setTimeout(() => {
          const updatedCards = cards.map((card) =>
            card.flipped ? { ...card, flipped: false } : card
          );
          setCards(updatedCards);
          setFlippedCards([]);
          setCanFlip(true); // Reactiva la capacidad de voltear tarjetas
        }, 1000);

        return () => clearTimeout(mismatchTimeout);
      }
    }
  }, [flippedCards, cards]);

  const handleCardClick = (clickedId) => {
    if (!canFlip) {
      return;
    }

    const clickedCard = cards.find((card) => card.id === clickedId);

    // Evitar que las cartas ya coincidentes se vuelvan a voltear
    if (clickedCard.flipped) {
      return;
    }

    const updatedCards = cards.map((card) =>
      card.id === clickedId ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);
    setFlippedCards([...flippedCards, clickedCard]);
  };

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          imagePath={card.imagePath}
          name={card.name}
          flipped={card.flipped}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default Memory;
