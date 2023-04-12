import "./App.css";
import React, { useState } from "react";
// confetti npm install canvas-confetti -E
import confetti from "canvas-confetti";

const TURNS = {
  // Creo un objeto con las constantes X y O, que son los turnos
  X: "❌",
  O: "⚪",
};
// El Square es cada uno de los cuadrados del tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`; // Si isSelected es true, agrega la clase is-selected
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

const WINNER_COMBINATIONS = [
  // Creo un arreglo con todas las combinaciones ganadoras
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Creo un estado para el board con un arreglo de 9 posiciones
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null = no hay ganador, false = empate, X = gano X, O = gano O

  const getWinner = (board) => {
    // Revisamos todas las combinaciones ganadoras
    // para ver si alguna de ellas se cumple. X u O gano el juego

    // Recorro el arreglo de combinaciones ganadoras
    for (const combo of WINNER_COMBINATIONS) {
      const [a, b, c] = combo; // Desestructuro el arreglo de combinaciones ganadoras
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // Si la posicion a del board tiene un valor, y ese valor es igual al de la posicion b y al de la posicion c, entonces hay un ganador
        return board[a]; // Retorno el valor de la posicion a del board x u o
      }
    }
    return null; // Si no hay ganador, retorno null
  };

  const checkEndGame = (newBoard) => {
    // Verificamos si el juego termino en empate
    return newBoard.every((square) => square !== null); // Si todas las posiciones del board tienen un valor, entonces el juego termino en empate
  };

  const updateBoard = (index) => {
    // No actualizamos esta posicion si ya tiene un valor o si hay un ganador
    if (board[index] || winner) return;

    // Actualizar el tablero
    const newBoard = [...board]; // Creo una copia del board
    newBoard[index] = turn; // En la posicion index del board, le asigno el turno
    setBoard(newBoard); // Actualizo el board

    // Actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; // Si el turno es X, el nuevo turno es O, si no, es X
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
      <button onClick={resetGame}>Resetear Juego</button>
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

      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "Empate" : "Ganó"}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <button onClick={resetGame}>Reiniciar</button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
