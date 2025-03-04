import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button
      className="w-16 h-16 border text-xl font-bold"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tic-Tac-Toe</h2>
      <div className="grid grid-cols-3 w-48">
        {board.map((_, i) => renderSquare(i))}
      </div>
    </div>
  );
};

export default TicTacToe;