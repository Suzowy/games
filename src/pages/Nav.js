import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'active' : ''}`} />
          <div className={`bar ${menuOpen ? 'active' : ''}`} />
          <div className={`bar ${menuOpen ? 'active' : ''}`} />
        </div>
        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" onClick={closeMenu}>login</Link>
          </li>
          <li className="nav-item">
            <Link to="/ticTacToe" onClick={closeMenu}>Tres en raya</Link>
          </li>
          <li className="nav-item">
            <Link to="/sudoku" onClick={closeMenu}>Sudoku</Link>
          </li>
          <li className="nav-item">
            <Link to="/hangman" onClick={closeMenu}>Ahorcado</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" onClick={closeMenu}>¿Quién es quién?</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" onClick={closeMenu}>Juego de memoria</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" onClick={closeMenu}>Atrapa al topo</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};


export default Nav;
