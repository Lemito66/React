import "./App.css";
import React, { useState } from "react";
import { TURNS } from "./constants";
import { Square } from "./components/Square";
// confetti npm install canvas-confetti -E
import confetti from "canvas-confetti";
import { checkEndGame, getWinner } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Creo un estado para el board con un arreglo de 9 posiciones
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null = no hay ganador, false = empate, X = gano X, O = gano O

  const updateBoard = (index) => {
    // No actualizamos esta posicion si ya tiene un valor o si hay un ganador
    if (board[index] || winner) return;

    // Actualizar el tablero
    const newBoard = [...board]; // Creo una copia del board
    newBoard[index] = turn; // En la posicion index del board, le asigno el turno
    setBoard(newBoard); // Actualizo el board

    // Actualizar el turno
    // Si el turno es X, el nuevo turno 
    //es O, si no, es X
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; 
    setTurn(newTurn); // Actualizo el turno

    // Verificar si hay un ganador
    const newWinner = getWinner(newBoard); // Llamo a la funcion getWinner y le paso el nuevo board
    if (newWinner) {
      confetti(); // Si hay un ganador, llamo a la funcion confetti
      setWinner(newWinner);
    }
    // ver si el juego termino en empate
    else if (checkEndGame(newBoard)) {
      setWinner(false); // false = empate
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar Juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
