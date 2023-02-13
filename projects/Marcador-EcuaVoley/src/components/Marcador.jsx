import { useState } from "react";
import "../styles/Marcador.css";
import "../index.css";

function Marcador() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const addPointOne = () => {
    if (countOne === 11) {
      alert(
        `El equipo 1 ha ganado con un marcador de ${countOne + 1} a ${countTwo}`
      );
      resetPoints();
    } else {
      setCountOne(countOne + 1);
    }
    //setCountOne(countOne + 1);
  };

  const addPointTwo = () => {
    if (countTwo === 11) {
      alert(
        `El equipo 2 ha ganado con un marcador de ${countTwo + 1} a ${countOne}`
      );
      resetPoints();
    } else {
      setCountTwo(countTwo + 1);
    }
    //setCountTwo(countTwo + 1);
  };

  const resetPoints = () => {
    setCountOne(0);
    setCountTwo(0);
  };

  return (
    <div className="App">
      <div className="team team-1">
        <h3 className="team-name">Equipo 1</h3>
        <div className="score">{countOne}</div>
        <div className="actions">
          <button className="btn add-point" onClick={addPointOne}>
            Añadir Punto
          </button>
          <button className="btn reset" onClick={() => setCountOne(0)}>
            Resetear
          </button>
        </div>
      </div>
      <div className="team team-2">
        <h3 className="team-name">Equipo 2</h3>
        <div className="score">{countTwo}</div>
        <div className="actions">
          <button className="btn add-point" onClick={addPointTwo}>
            Añadir Punto
          </button>
          <button className="btn reset" onClick={() => setCountTwo(0)}>
            Resetear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Marcador;
