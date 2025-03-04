import React, { useState } from "react";

const choices = ["Rock", "Paper", "Scissors"];

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) setResult("It's a tie!");
    else if (
      (choice === "Rock" && computer === "Scissors") ||
      (choice === "Paper" && computer === "Rock") ||
      (choice === "Scissors" && computer === "Paper")
    ) setResult("You Win!");
    else setResult("You Lose!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Rock-Paper-Scissors</h2>
      <div className="flex gap-4">
        {choices.map((choice) => (
          <button key={choice} className="p-2 border" onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && (
        <p className="mt-4">You chose {playerChoice}, Computer chose {computerChoice}. {result}</p>
      )}
    </div>
  );
};

export default RockPaperScissors;