
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Dashboard from "./pages/Dashboard";
import TicTacToe from "./pages/juegos/TicTacToe/TicTacToe";
import Sudoku from "./pages/juegos/Sudoku/Sudoku";
import Hangman from "./pages/juegos/Hangman/Hangman";
import Memory from "./pages/juegos/Memory/Memory";
import GuessWho from "./pages/juegos/GuessWho/GuessWho";
import Topo from "./pages/juegos/Topo/Topo";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/default" element={<Default />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Default />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/Sudoku" element={<Sudoku />} />
          <Route path="/Hangman" element={<Hangman />} />
          <Route path="/Memory" element={<Memory />} />
          <Route path="/GuessWho" element={<GuessWho />} />
          <Route path="/Topo" element={<Topo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
