import "../styles/About.css";
import { Link } from "react-router-dom";
const About = () => {
  const backgroundStyle = {
    backgroundImage:
      'url("https://static.vecteezy.com/system/resources/previews/003/762/458/original/puzzles-and-riddles-neon-light-icons-set-sudoku-trivia-quiz-nonogram-optical-illusion-jigsaw-logic-games-mental-exercise-brain-teaser-glowing-signs-isolated-illustrations-vector.jpg")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  };

  return (
    <div style={backgroundStyle}>
      <div className="texto">
        <h2 className="titulo" data-text="Efecto Neon">
          juegos clasicos
        </h2>
        <p>
          Los juegos clásicos son una fuente inagotable de diversión para
          personas de todas las edades. Desde desafiantes rompecabezas hasta
          juegos de adivinanzas y competencias estratégicas, estos títulos han
          resistido la prueba del tiempo y siguen siendo populares en la
          actualidad. Aquí tienes algunos de los juegos clásicos más queridos:
        </p>
        <p>
          <span class="resaltado">
            <Link to="/TicTacToe">Tres en raya</Link>
          </span>
          : Un juego de estrategia para dos jugadores en un tablero de 3x3. Los
          jugadores se turnan para colocar sus fichas en el tablero con el
          objetivo de obtener tres de sus fichas en línea horizontal, vertical o
          diagonal antes que el oponente.
        </p>
        <p>
          <span class="resaltado">
            {" "}
            <Link to="/sudoku">Sudoku</Link>
          </span>
          : Un juego de lógica y números que desafía tu capacidad para llenar un
          tablero 9x9 con dígitos del 1 al 9 sin repetir ningún número en filas,
          columnas o regiones. Cada sudoku presenta un rompecabezas único que
          requiere habilidades de resolución de problemas y paciencia.
        </p>
        <p>
          <span class="resaltado">
            <Link to="/Hangman">El ahorcado</Link>
          </span>
          : Un clásico juego de palabras en el que un jugador elige una palabra
          secreta y el otro jugador intenta adivinarla sugiriendo letras. Por
          cada letra incorrecta, se dibuja una parte de un ahorcado. El objetivo
          es adivinar la palabra antes de que el ahorcado esté completo.
        </p>
        <p>
          <span class="resaltado">
            <Link to="/Dashboard">¿quien es quien?</Link>
          </span>
          : Un juego de adivinanzas en el que los jugadores deben hacer
          preguntas sí o no para adivinar el personaje secreto del oponente. El
          objetivo es eliminar personajes de una cuadrícula hasta que quede un
          único personaje, que será el ganador.
        </p>
        <p>
          <span class="resaltado">
            <Link to="/Dashboard">Juego de memoria</Link>
          </span>
          , este juego implica voltear cartas en busca de coincidencias. Los
          jugadores deben recordar la ubicación de las cartas para hacer
          coincidir parejas y ganar puntos.
        </p>

        <p>
          <span class="resaltado">
            <Link to="/Dashboard">Atrapa al topo</Link>
          </span>
          : Un juego de velocidad y reflejos en el que los jugadores intentan
          atrapar a un topo que aparece y desaparece en agujeros en un tablero.
          Este juego suele ser una competencia cronometrada.
        </p>

        <p>
          Estos juegos clásicos son una excelente manera de pasar el tiempo y
          desafiar tu mente en cualquier lugar y en cualquier momento. Puedes
          disfrutar de ellos en forma de juegos de mesa físicos o versiones
          digitales en línea, lo que los hace accesibles para todos. ¡Así que
          elige tu favorito y comienza a jugar!
        </p>
      </div>
    </div>
  );
};
export default About;
