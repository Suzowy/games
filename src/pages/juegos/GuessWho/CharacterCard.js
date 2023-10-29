import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Género: {character.gender}</p>
      <p>Color de pelo: {character.hairColor}</p>
      <p>Color de ojos: {character.eyeColor}</p>
      <p>Tiene bigote: {character.hasMustache ? 'Si' : 'No'}</p>
      <p>Tiene sombrero: {character.hasHat ? 'Si' : 'No'}</p>
      <p>Tiene barba: {character.hasBeard ? 'Si' : 'No'}</p>
      <p>Tiene gafas: {character.hasGlasses ? 'Si' : 'No'}</p>
      <p>Color de piel: {character.skinColor}</p>
      <p>tipo de pelo: {character.hairLength} </p>

    </div>
  );
};

export default CharacterCard;