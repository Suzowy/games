import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Nav.css";

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
          <div className={`bar ${menuOpen ? "active" : ""}`} />
          <div className={`bar ${menuOpen ? "active" : ""}`} />
          <div className={`bar ${menuOpen ? "active" : ""}`} />
        </div>
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
              </svg>{" "}
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-android"
                viewBox="0 0 16 16"
              >
                <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              </svg>{" "}
              About
            </Link>
          </li>
          <li className="nav-item">
            <details>
              <summary>Catalogo</summary>
              <ul className="submenu">
                <li className="nav-item">
                  <Link to="/dashboard" onClick={closeMenu}>
                    {" "}
                    Ver todos
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-joystick"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
                      <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
                    </svg>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ticTacToe" onClick={closeMenu}>
                    Tres en raya
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sudoku" onClick={closeMenu}>
                    Sudoku
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hangman" onClick={closeMenu}>
                    Ahorcado
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Default" onClick={closeMenu}>
                    ¿Quién es quién?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/memory" onClick={closeMenu}>
                    Juego de memoria
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Default" onClick={closeMenu}>
                    Atrapa al topo
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
