import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./index.css";
import MainMenu from "./MainMenu";
import Oplata from "./Oplata";

function App() {
  const [thisPage, setThisPage] = useState(2);
  return (
    <div className="wrap">
      <div className="wrap_2">
        <Header></Header>
        {thisPage === 0 && <MainMenu></MainMenu>}
        {thisPage === 2 && <Oplata></Oplata>}
      </div>
    </div>
  );
}

export default App;
