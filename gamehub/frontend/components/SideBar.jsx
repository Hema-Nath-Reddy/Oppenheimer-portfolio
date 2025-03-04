import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const SideBar = () => (
    <aside className="sidebar">
      <h2>Games</h2>
      <ul>
        <li><Link to="/tictactoe">Tic-Tac-Toe</Link></li>
        <li><Link to="/rockpaperscissors">Rock-Paper-Scissors</Link></li>
      </ul>
    </aside>
  );
  

export default SideBar
