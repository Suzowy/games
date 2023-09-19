import React, { Component } from 'react';
import './GuessWho.css';

const questions = [
  { id: 1, text: '¿Tiene bigote?', property: 'hasMustache' },
  { id: 2, text: '¿Tiene el pelo rubio?', property: 'hasBlondeHair' },
  { id: 3, text: '¿Es una mujer?', property: 'isFemale' },
  // Agrega más preguntas según tus personajes
];

class GuessWho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        { name: 'Alicia', secret: false, hasMustache: false, hasBlondeHair: false, isFemale: true},
        { name: 'Bob', secret: true, hasMustache: true, hasBlondeHair: false, isFemale: false},
        { name: 'Charlie', secret: false, hasMustache: false, hasBlondeHair: true, isFemale: false},
        // Agrega más personajes con sus propiedades e imágenes
      ],
      selectedCharacter: null,
      guess: '',
      message: '',
      gameOver: false,
      answers: {},
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
      this.setState({ message: `¡Correcto! El personaje secreto es ${selectedCharacter.name}.`, gameOver: true });
    } else {
      this.setState({ message: '¡Inténtalo de nuevo! Ese no es el personaje secreto.' });
    }
  };

  handleQuestionAnswer = (questionId, answer) => {
    const { answers } = this.state;
    answers[questionId] = answer;
    this.setState({ answers });
    this.filterCharacters();
  };

  filterCharacters = () => {
    const { characters, answers } = this.state;
    let filteredCharacters = characters;

    for (const questionId in answers) {
      if (answers[questionId] === 'yes') {
        const question = questions.find((q) => q.id === parseInt(questionId));
        filteredCharacters = filteredCharacters.filter(
          (character) => character[question.property]
        );
      } else if (answers[questionId] === 'no') {
        const question = questions.find((q) => q.id === parseInt(questionId));
        filteredCharacters = filteredCharacters.filter(
          (character) => !character[question.property]
        );
      }
    }

    if (filteredCharacters.length === 1) {
      const selectedCharacter = filteredCharacters[0];
      this.setState({
        message: `¡Correcto! El personaje secreto es ${selectedCharacter.name}.`,
        gameOver: true,
      });
    }
  };

  render() {
    const { selectedCharacter, message, gameOver } = this.state;

    return (
      <div>
        <h1>¿Quién es quién?</h1>
        <p>¿Quién es el personaje secreto?</p>

        {!gameOver && (
          <div>
      
            <p>Preguntas:</p>
            {questions.map((question) => (
              <div key={question.id}>
                <p>{question.text}</p>
                <button onClick={() => this.handleQuestionAnswer(question.id, 'yes')}>Sí</button>
                <button onClick={() => this.handleQuestionAnswer(question.id, 'no')}>No</button>
              </div>
            ))}
          </div>
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
