import React, { useState, useEffect } from 'react';
import './Topo.css';
import moleImage from './mole.png';
import dirtImage from './dirt.png';

function Topo() {
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const holes = document.querySelectorAll('.hole');
    let lastHole;

    function randomTime(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    function randomHole(holes) {
      const idx = Math.floor(Math.random() * holes.length);
      const hole = holes[idx];
      if (hole === lastHole) {
        return randomHole(holes);
      }
      lastHole = hole;
      return hole;
    }

    function peep() {
      if (!timeUp) {
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        const mole = hole.querySelector('.mole');

        mole.style.visibility = 'visible';

        setTimeout(() => {
          mole.style.visibility = 'hidden';
          if (!timeUp) peep();
        }, time);
      }
    }

    function startGame() {
      setScore(0);
      setTimeUp(false);
      peep();
      setTimeout(() => setTimeUp(true), 15000);
    }

    function wack(e) {
      if (!e.isTrusted) return;
      setScore(score + 1);
      e.target.style.visibility = 'hidden';
    }

    holes.forEach((hole) => hole.addEventListener('click', wack));

    return () => {
      holes.forEach((hole) => hole.removeEventListener('click', wack));
    };
  }, [score, timeUp]);

  return (
    <div>
      <p className="score">Puntuación: {score}</p>
      <div className="topoGame">
        <div className="hole">
          <img src={dirtImage} alt="Dirt" className="dirt" />
          <img src={moleImage} alt="Mole" className="mole" />
        </div>
        <div className="hole">
          <img src={dirtImage} alt="Dirt" className="dirt" />
          <img src={moleImage} alt="Mole" className="mole" />
        </div>
        <div className="hole">
          <img src={dirtImage} alt="Dirt" className="dirt" />
          <img src={moleImage} alt="Mole" className="mole" />
        </div>
        <div className="hole">
          <img src={dirtImage} alt="Dirt" className="dirt" />
          <img src={moleImage} alt="Mole" className="mole" />
        </div>
        <div className="hole">
          <img src={dirtImage} alt="Dirt" className="dirt" />
          <img src={moleImage} alt="Mole" className="mole" />
        </div>
        <div className="hole">
          <img src={dirtImage} alt="Dirt" className="dirt" />
          <img src={moleImage} alt="Mole" className="mole" />
        </div>
        <div className="hole">
          <img src={dirtImage} alt="Dirt" className="dirt" />
          <img src={moleImage} alt="Mole" className="mole" />
        </div>
        <div className="hole">
          <img src={dirtImage} alt="Dirt" className="dirt" />
          <img src={moleImage} alt="Mole" className="mole" />
        </div>
      </div>
    </div>
  );
}

export default Topo;
