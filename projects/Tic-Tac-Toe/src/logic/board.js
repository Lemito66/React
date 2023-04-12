import { WINNER_COMBINATIONS } from "../constants";

export const getWinner = (board) => {
  // Revisamos todas las combinaciones ganadoras
  // para ver si alguna de ellas se cumple. X u O gano el juego

  // Recorro el arreglo de combinaciones ganadoras
  for (const combo of WINNER_COMBINATIONS) {
    const [a, b, c] = combo; // Desestructuro el arreglo de combinaciones ganadoras
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // Si la posicion a del board tiene un valor, y ese valor es igual al de la posicion b 
      // y al de la posicion c, entonces hay un ganador
      return board[a]; // Retorno el valor de la posicion a del board x u o
    }
  }
  return null; // Si no hay ganador, retorno null
};

export const checkEndGame = (newBoard) => {
  // Verificamos si el juego termino en empate
  return newBoard.every((square) => square !== null); // Si todas las posiciones del board 
  //tienen un valor, entonces el juego termino en empate
};

