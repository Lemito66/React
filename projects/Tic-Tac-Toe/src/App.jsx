import "./App.css";
import React, { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return <div className={className}>{children}</div>;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Creo un estado para el board
  const [turn, setTurn] = useState(TURNS.X); // Creo un estado para el turno

  const [number, setNumber] = useState(0); // Creo un estado para el numero
  const [isFollowing, setIsFollowing] = useState(false); // Creo un estado para el texto

  const isFollowindText = isFollowing ? "Síguiendo" : "Seguir";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const addNumber = () => {
    setNumber(number + 1);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <section>
        <button onClick={addNumber}>{number}</button>

        <button onClick={handleClick}>{isFollowindText}</button>
      </section>
    </main>
  );
}

export default App;
