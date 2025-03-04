import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import TicTacToe from "../components/TicTacToe";
import RockPaperScissors from "../components/RockPaperScissors";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
