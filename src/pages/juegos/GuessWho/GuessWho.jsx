import React, { Component } from 'react';
import './GuessWho.css';
class GuessWho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        { name: 'Alicia', secret: false },
        { name: 'Bob', secret: true },
        { name: 'Charlie', secret: false },

      ],
      selectedCharacter: null,
      guess: '',
      message: '',
      gameOver: false,
    };
  }

  componentDidMount() {
    this.selectSecretCharacter();
  }

  selectSecretCharacter = () => {
    const { characters } = this.state;
    const secretCharacters = characters.filter((character) => character.secret);
    const randomIndex = Math.floor(Math.random() * secretCharacters.length);
    this.setState({ selectedCharacter: secretCharacters[randomIndex] });
  };

  handleGuessChange = (event) => {
    this.setState({ guess: event.target.value });
  };

  handleGuessSubmit = (event) => {
    event.preventDefault();
    const { selectedCharacter, guess } = this.state;

    if (selectedCharacter.name.toLowerCase() === guess.toLowerCase()) {
      this.setState({ message: '¡Correcto! Has adivinado al personaje secreto.', gameOver: true });
    } else {
      this.setState({ message: '¡Inténtalo de nuevo! Ese no es el personaje secreto.' });
    }
  };

  render() {
    const { selectedCharacter, guess, message, gameOver } = this.state;

    return (
      <div>
        <h1>¿Quien es quien?</h1>
        <p>¿Quién es el personaje secreto?</p>

        {!gameOver && (
          <form onSubmit={this.handleGuessSubmit}>
            <input
              type="text"
              placeholder="Adivina el personaje"
              value={guess}
              onChange={this.handleGuessChange}
            />
            <button type="submit">Adivinar</button>
          </form>
        )}

        <p>{message}</p>

        {gameOver && (
          <div>
            <p>El personaje secreto era: {selectedCharacter.name}</p>
            <button onClick={this.selectSecretCharacter}>Jugar de nuevo</button>
          </div>
        )}
      </div>
    );
  }
}

export default GuessWho;
