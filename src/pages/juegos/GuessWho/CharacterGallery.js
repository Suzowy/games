import React from 'react';

const CharacterGallery = ({ characters }) => {
  return (
    <div className="character-gallery">
      {characters.map((character, index) => (
        <div key={index} className="character-card">
        <img className='personajes' src={character.image} alt={character.name} />
          <p className='nombre'>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterGallery;
