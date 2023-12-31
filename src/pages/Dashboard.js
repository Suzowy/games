import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Juegotarjeta({ titulo, descripcion, enlace }) {
  return (
    <div className="tarjeta">
      <div className="tarjeta-body">
        <h5 className="tarjeta-title">{titulo}</h5>
        <p className="tarjeta-text">{descripcion}</p>
        <Link to={enlace} className="btn btn-primary">
          Jugar
        </Link>
      </div>
    </div>
  );
}
const Dashboard = () => {
  const juegos = [
    {
      titulo: "Tres en raya",
      descripcion: (
        <>
          Los jugadores se turnan para colocar sus fichas en el tablero con el
          objetivo de obtener tres de sus fichas en línea horizontal, vertical o
          diagonal antes que el oponente.
          <br />
          <img
            src="https://cope-cdnmed.agilecontent.com/resources/jpg/4/8/1590140340984.jpg"
            alt="Imagen del juego Tres en raya"
            className="imagen-juego"
          />
        </>
      ),
      enlace: "/TicTacToe",
    },
    {
      titulo: "Sudoku",
      descripcion: (
        <>
          Es un apasionante juego de lógica y números que desafía tu capacidad
          para llenar un tablero 9x9 con dígitos del 1 al 9 sin repetir ningún
          número en filas, columnas o regiones.
          <img
            src="https://play-lh.googleusercontent.com/7s0bFegTDSpYmtsJYAVrQO3yjjmsTShxOxI4Cx0uHbgWrIA4zvmR-VCQ-XNVbHliqQ"
            alt="Imagen del juego sudoku"
            className="imagen-juego"
          />
        </>
      ),
      enlace: "/sudoku",
    },
    {
      titulo: "El ahorcado",
      descripcion: (
        <>
          Por cada letra incorrecta, se dibuja una parte de un ahorcado. El
          objetivo es adivinar la palabra antes de que el ahorcado esté
          completo.
          <br />
          <img
            src="https://play-lh.googleusercontent.com/Zv474wW25zNdahXn9fTA6MRPB4tzPRRcqdWM0nZTUDFE9KFFEd5ihGXh4tmJOOiMABM"
            alt="Imagen del juego ahorcado"
            className="imagen-juego"
          />
        </>
      ),
      enlace: "/Hangman",
    },
    {
      titulo: "¿Quién es quién?",
      descripcion: (
        <>
          Es un intrigante juego de adivinanzas en el que los jugadores deben
          hacer preguntas de sí o no para descubrir el personaje secreto del
          oponente.
          <br />
          <img
            src="https://elements-video-cover-images-0.imgix.net/files/27489f41-fd39-454b-8c8b-8f7c658d29aa/inline_image_preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=69d69830e9c1760c581a6069c4376866"
            alt="Imagen del juego quien es quien"
            className="imagen-juego"
          />
        </>
      ),
      enlace: "/GuessWho",
    },
    {
      titulo: "Juego de memoria",
      descripcion: (
        <>
          Pon a prueba tu capacidad de recordar la ubicación de las cartas y
          emparejarlas antes de que se acabe el tiempo.
          <br />
          <img
            src="https://play-lh.googleusercontent.com/sPHdC6J5W49zfcrKvFNK5PONi-ZW-8vw0z9-GFnn9aegxqoBd4LPJEMp7O5KpRN0oQ"
            alt="Imagen del juego memory"
            className="imagen-juego"
          />
        </>
      ),
      enlace: "/Memory",
    },
    {
      titulo: "Atrapa al topo",
      descripcion: (
        <>
          Es un juego de velocidad y reflejos donde debes atrapar a un topo que
          aparece y desaparece en agujeros.
          <br />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGm9ehjdRkciGFAJ2Gq6lSIPUE6SGiq5yzjsdgTDIbppayoeoIVBbUZQFM5OZUjy0M1fE&usqp=CAU"
            alt="Imagen del juego atrapa al topo"
            className="imagen-juego"
          />
        </>
      ),
      enlace: "/Topo",
    },
  ];

  return (
    <div className="catalogo">
      <h2 className="titulo">Catalogo de juegos</h2>

      <div className="tarjeta-deck">
        {juegos.map((juego, index) => (
          <Juegotarjeta
            key={index}
            titulo={juego.titulo}
            descripcion={juego.descripcion}
            enlace={juego.enlace}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
