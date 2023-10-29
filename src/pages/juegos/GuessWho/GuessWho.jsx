import React, { Component } from "react";
import "./GuessWho.css";
import CharacterCard from "./CharacterCard";
import CharacterGallery from "./CharacterGallery";

class GuessWho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          name: "Juan",
          eyeColor: "negro",
          hairColor: "negro",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: false,
          image: "juan.jpg",
        },
        {
          name: "Ana",
          eyeColor: "negro",
          hairColor: "naranja",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: true,
          hairLength: "corto",
          gender: "femenino",
          hasGlasses: false,
          image: "ana.jpg",
        },
        {
          name: "Steve",
          eyeColor: "negro",
          hairColor: "negro",
          skinColorWhite: false,
          skinColorBlack: true,
          hasMustache: false,
          hasBeard: true,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: true,
          image: "steve.jpg",
        },
        {
          name: "Maria",
          eyeColor: "azul",
          hairColor: "naranja",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "largo",
          gender: "femenino",
          hasGlasses: false,
          image: "maria.jpg",
        },
        {
          name: "Pedro",
          eyeColor: "negro",
          hairColor: "blanco",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: true,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: true,
          image: "pedro.jpg",
        },
        {
          name: "Laura",
          eyeColor: "negro",
          hairColor: "castaño",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: true,
          hairLength: "corto",
          gender: "femenino",
          hasGlasses: false,
          image: "laura.jpg",
        },
        {
          name: "Carlos",
          eyeColor: "nagro",
          hairColor: "castaño",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: false,
          image: "carlos.jpg",
        },
        {
          name: "Yoli",
          eyeColor: "azul",
          hairColor: "rubio",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "femenino",
          hasGlasses: false,
          image: "yoli.jpg",
        },
        {
          name: "Andrés",
          eyeColor: "nagro",
          hairColor: "blanco",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: true,
          hasBeard: true,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: true,
          image: "andres.jpg",
        },
        {
          name: "Sofía",
          eyeColor: "nagro",
          hairColor: "multicolor",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "largo",
          gender: "femenino",
          hasGlasses: true,
          image: "sofia.jpg",
        },
        {
          name: "Manu",
          eyeColor: "negro",
          hairColor: "negro",
          skinColorWhite: false,
          skinColorBlack: true,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: false,
          image: "manu.jpg",
        },
        {
          name: "Elena",
          eyeColor: "negro",
          hairColor: "blanco",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: true,
          hairLength: "corto",
          gender: "femenino",
          hasGlasses: true,
          image: "elena.jpg",
        },
        {
          name: "Angel",
          eyeColor: "negro",
          hairColor: "blanco",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: true,
          hasBeard: true,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: true,
          image: "angel.jpg",
        },
        {
          name: "Carol",
          eyeColor: "negro",
          hairColor: "negro",
          skinColorWhite: false,
          skinColorBlack: true,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "femenino",
          hasGlasses: true,
          image: "carol.jpg",
        },
        {
          name: "Mario",
          eyeColor: "azul",
          hairColor: "rubio",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: false,
          image: "mario.jpg",
        },
        {
          name: "Victor",
          eyeColor: "negro",
          hairColor: "naranja",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: false,
          image: "victor.jpg",
        },
        {
          name: "Felix",
          eyeColor: "negro",
          hairColor: "blanco",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: true,
          image: "felix.jpg",
        },
        {
          name: "Ivan",
          eyeColor: "negro",
          hairColor: "castaño",
          skinColorWhite: true,
          skinColorBlack: false,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: false,
          image: "ivan.jpg",
        },
        {
          name: "Javi",
          eyeColor: "negro",
          hairColor: "negro",
          skinColorWhite: false,
          skinColorBlack: true,
          hasMustache: true,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: false,
          image: "javi.jpg",
        },
        {
          name: "Santi",
          eyeColor: "negro",
          hairColor: "negro",
          skinColorWhite: false,
          skinColorBlack: true,
          hasMustache: false,
          hasBeard: false,
          hasHat: false,
          hairLength: "corto",
          gender: "masculino",
          hasGlasses: true,
          image: "santi.jpg",
        },
      ],
      guessResult: null,
      selectedCharacter: null,
      questions: [
        {
          text: "¿Tiene el pelo rubio?",
          property: "hairColor",
          value: "rubio",
        },
        {
          text: "¿Tiene el pelo castaño?",
          property: "hairColor",
          value: "castaño",
        },
        {
          text: "¿Tiene el pelo blanco?",
          property: "hairColor",
          value: "blanco",
        },
        {
          text: "¿Tiene el pelo negro?",
          property: "hairColor",
          value: "negro",
        },
        {
          text: "¿Tiene el pelo naranja?",
          property: "hairColor",
          value: "naranja",
        },
        {
          text: "¿Es de género masculino?",
          property: "gender",
          value: "masculino",
        },
        {
          text: "¿Es de género femenino?",
          property: "gender",
          value: "femenino",
        },
        {
          text: "¿Tiene el pelo largo?",
          property: "hairLength",
          value: "largo",
        },
        {
          text: "¿Tiene el pelo corto?",
          property: "hairLength",
          value: "corto",
        },
        { text: "¿Tiene bigote?", property: "hasMustache", value: true },
        { text: "¿Tiene barba?", property: "hasBeard", value: true },
        { text: "¿Tiene sombrero?", property: "hasHat", value: true },
        { text: "¿Tiene gafas?", property: "hasGlasses", value: true },
        {
          text: "¿Tiene los ojos azules?",
          property: "eyeColor",
          value: "azul",
        },
        {
          text: "¿Tiene los ojos negros?",
          property: "eyeColor",
          value: "negro",
        },
        {
          text: "¿Es de piel blanca?",
          property: "skinColorWhite",
          value: true,
        },
        {
          text: "¿Es de piel morena?",
          property: "skinColorBlack",
          value: true,
        },
      ],

      gameOver: false,
      playerQuestions: [],
      currentQuestionIndex: 0,
      machineAnswer: null,
      selectedPlayerCharacterName: null,
    };
  }

  componentDidMount() {
    this.selectSecretCharacter();
  }

  selectSecretCharacter = () => {
    const { characters } = this.state;
    const randomIndex = Math.floor(Math.random() * characters.length);
    this.setState({
      selectedCharacter: characters[randomIndex],
      gameOver: false,
      playerQuestions: [],
      selectedPlayerCharacterName: null,
    });
  };

  handleCharacterSelection = (event) => {
    const selectedCharacterIndex = event.target.value;
    const selectedCharacter = this.state.characters[selectedCharacterIndex];
    this.setState({ selectedPlayerCharacterName: selectedCharacter.name });
  };

  handleQuestionAdd = () => {
    const { questions, selectedCharacter } = this.state;
    const questionIndex = document.getElementById("questionDropdown").value;
    const selectedQuestion = questions[questionIndex];

    // Realiza la lógica de selección de personaje y respuesta "Sí" o "No"
    const machineAnswer = this.getMachineAnswer(
      selectedQuestion,
      selectedCharacter
    );

    this.setState((prevState) => ({
      playerQuestions: [...prevState.playerQuestions, selectedQuestion],
      questions: questions.filter((_, index) => index !== questionIndex), // Elimina la pregunta utilizada
      machineAnswer,
    }));
  };
  getMachineAnswer = (question, selectedCharacter) => {
    const characterProperty = question.property;
    const propertyValue = question.value;

    return selectedCharacter[characterProperty] === propertyValue ? "Sí" : "No";
  };
  handleGuessCharacter = () => {
    const { selectedCharacter, selectedPlayerCharacterName } = this.state;
    if (selectedCharacter.name === selectedPlayerCharacterName) {
      this.setState({
        guessResult: "¡Felicidades, has adivinado el personaje!",
      });
    } else {
      this.setState({
        guessResult: "Sigue intentandolo.",
      });
    }
  };

  render() {
    const {
      characters,
      selectedCharacter,
      gameOver,
      questions,
      currentQuestionIndex,
      machineAnswer,
    } = this.state;

    const guessedCorrectly =
      gameOver &&
      selectedCharacter &&
      selectedCharacter.name === this.state.selectedPlayerCharacter.name;

    return (
      <div className="GuessWho">
        <div className="Character">
          <CharacterGallery characters={characters} />
        </div>

        {currentQuestionIndex < questions.length && !gameOver && (
          <div className="question">
            <select
              id="questionDropdown"
              className="form-select"
              aria-label="Default select example"
            >
              <option value="default" selected>
                Selecciona una pregunta
              </option>
              {questions.map((question, index) => (
                <option key={index} value={index}>
                  {question.text}
                </option>
              ))}
            </select>
            <button className="botonAdivino" onClick={this.handleQuestionAdd}>Enviar pregunta</button>

            {machineAnswer && <p>Respuesta: {machineAnswer}</p>}
          </div>
        )}

        <div className="characterSelection">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={this.handleCharacterSelection}
          >
            <option value="default" selected>
             El personaje es...
            </option>
            {characters.map((character, index) => (
              <option key={index} value={index}>
                {character.name}
              </option>
            ))}
          </select>
          <button className="botonAdivino" onClick={this.handleGuessCharacter}>
            Adivinar personaje
          </button>
          {this.state.guessResult && <p>{this.state.guessResult}</p>}
        </div>

        {guessedCorrectly && selectedCharacter && (
          <div className={`secretCharacter ${gameOver ? "rotated" : ""}`}>
            <CharacterCard character={selectedCharacter} />
          </div>
        )}

        {guessedCorrectly && (
          <div className="game-won">
            <h2>¡Has ganado!</h2>
            <button onClick={this.restartGame}>Volver a jugar</button>
            <a href="/" className="backHome">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708L7.293 15.5a.5.5 0 0 0 .708 0l6-6a.5.5 0 0 0 0-.708L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
              </svg>{" "}
              Ir a inicio
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default GuessWho;
