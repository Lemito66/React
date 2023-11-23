import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { API_URL_CAT } from "./api/data";


function App() {
  const [cat, setCat] = useState("primero");

  useEffect(() => {
    /* async function fetchData() {
      const response = await fetch(API_URL_CAT);
      const data = await response.json();
      setCat(data.fact);
      console.log(cat);
    }
    fetchData(); */

    // otra forma haciendo fetch
    fetch(API_URL_CAT)
      .then((response) => response.json())
      .then((data) => setCat(data.fact));
  }, []);

  return (
    <>
      <h1>App de gatitos</h1>
      <h2>{cat}</h2>
    </>
  );
}

export default App;
