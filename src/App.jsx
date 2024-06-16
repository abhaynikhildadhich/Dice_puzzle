import React, { useState } from "react";
import Home from "./components/Home";
import Gameplay from "./components/Gameplay/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  function startGame() {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
      {isGameStarted ? <Gameplay /> : <Home props={startGame} />}
      {/* <Home/> */}
      
    </>
  );
}

export default App;
