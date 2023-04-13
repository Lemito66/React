import { useState } from "react";
import "./App.css";

function App() {
  const [pointTeamOne, setPointTeamOne] = useState(0);
  const [pointTeamTwo, setPointTeamTwo] = useState(0);
  const [changepointOne, setChangepointOne] = useState(false);
  const [changepointTwo, setChangepointTwo] = useState(false);

  const valueButtonTeamOne = changepointOne ? "Punto" : "Cambio";
  const valueButtonTeamTwo = changepointTwo ? "Punto" : "Cambio";

  const hancleClicKTeamOne = () => {
    if (changepointOne) {
      setPointTeamOne(pointTeamOne + 1);
      setChangepointOne(true);
      //changepointOne ? setChangepointOne(false) : setChangepointOne(true);
    } else {
      setChangepointOne(true);
    }
  };
  const hancleClicKTeamTwo = () => {
    if (changepointTwo) {
      setPointTeamTwo(pointTeamTwo + 1);
      setChangepointTwo(true);
      //changepointTwo ? setChangepointTwo(false) : setChangepointTwo(true);
    } else {
      setChangepointTwo(true);
    }
  };

  return (
    <div className="container">
      <div className="team">
        <h2>Equipo 1</h2>
        <div className="score">{pointTeamOne}</div>
        <button onClick={hancleClicKTeamOne}>{valueButtonTeamOne}</button>
      </div>
      <div className="team">
        <h2>Equipo 2</h2>
        <div className="score">{pointTeamTwo}</div>
        <button onClick={hancleClicKTeamTwo}>{valueButtonTeamTwo}</button>
      </div>
    </div>
  );
}

export default App;
