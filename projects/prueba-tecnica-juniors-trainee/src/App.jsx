import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { API_URL_CAT, CAT_PREFIX_IMAGE_URL } from "./api/data";

function App() {
  const [cat, setCat] = useState("primero");
  const [image, setImage] = useState();

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
      .then((data) => {
        const { fact } = data;
        setCat(fact);

        const threeFirstWord = fact.split(" ", 3).join(" ");
        console.log(threeFirstWord);
        setImage(`${CAT_PREFIX_IMAGE_URL}${threeFirstWord}`);
      });
  }, []);

  return (
    <>
      <h1>App de gatitos</h1>
      {cat && <h2>{cat}</h2>}
      {image && <img src={image} alt="cat" />}
    </>
  );
}

export default App;
