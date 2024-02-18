import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./index.css";
import MainMenu from "./MainMenu";
import Oplata from "./Oplata";
import Footer from "./Footer";
import Dostavka from "./Dostavka";
import Blog from "./Blog";
import About from "./About";

function App() {
  const [thisPage, setThisPage] = useState(5);
  return (
    <div className="wrap">
      <div className="wrap_2">
        <Header></Header>
        {thisPage === 0 && <MainMenu></MainMenu>}
        {thisPage === 1 && <About></About>}
        {thisPage === 2 && <Oplata></Oplata>}
        {thisPage === 3 && <Dostavka></Dostavka>}
        {thisPage === 5 && <Blog></Blog>}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
