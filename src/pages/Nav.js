import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard">login</Link>
          </li>
          <li className="nav-item">
            <Link to="/ticTacToe">TicTacToe</Link>
          </li>
          <li className="nav-item">
            <Link to="/sudoku">Sudoku</Link>
          </li>
          <li className="nav-item">
            <Link to="/hangman">Hangman</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Nav;
