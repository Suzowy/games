import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ imagePath, onClick, flipped }) => {
    const [isFlipped, setFlipped] = useState(flipped);

    const handleClick = () => {
      if (isFlipped) {
        setFlipped(false);
        onClick();
      }
    };

    useEffect(() => {
      setFlipped(flipped);
    }, [flipped]);

    return (
      <div className={`tarjeta ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="tarjeta-inner">
          <div className="front">
            <img
              src={process.env.PUBLIC_URL + imagePath}
              alt="tarjeta"
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

  export default Card;
