import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
   .scoreboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 0 20px;
}

.team-name {
  margin-bottom: 20px;
}

.score {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
}

.add-point {
  background-color: green;
  color: white;
}

.reset {
  background-color: red;
  color: white;
}


</style>
<body>
    <div class="scoreboard">
        <div class="team team-1">
          <h3 class="team-name">Equipo 1</h3>
          <div class="score">0</div>
          <div class="actions">
            <button class="btn add-point">Añadir Punto</button>
            <button class="btn reset">Resetear</button>
          </div>
        </div>
        <div class="team team-2">
          <h3 class="team-name">Equipo 2</h3>
          <div class="score">0</div>
          <div class="actions">
            <button class="btn add-point">Añadir Punto</button>
            <button class="btn reset">Resetear</button>
          </div>
        </div>
      </div>
      
      
</body>
</html>
  
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
