import { useState } from "react";

function Marcador() {
    const [count, setCount] = useState(0);
    
    return (
        <div className="scoreboard">
        <div className="team team-1">
            <h3 className="team-name">Equipo 1</h3>
            <div className="score">{count}</div>
            <div className="actions">
            <button className="btn add-point" onClick={() => setCount(count + 1)}>
                Añadir Punto
            </button>
            <button className="btn reset" onClick={() => setCount(0)}>
                Resetear
            </button>
            </div>
        </div>
        <div className="team team-2">
            <h3 className="team-name">Equipo 2</h3>
            <div className="score">{count}</div>
            <div className="actions">
            <button className="btn add-point" onClick={() => setCount(count + 1)}>
                Añadir Punto
            </button>
            <button className="btn reset" onClick={() => setCount(0)}>
                Resetear
            </button>
            </div>
        </div>
        </div>
    );
}

export default Marcador;