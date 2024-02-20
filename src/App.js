import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./index.css";
import MainMenu from "./MainMenu";
import Oplata from "./Oplata";
import Footer from "./Footer";
import Dostavka from "./Dostavka";
import Blog from "./Blog";
import About from "./About";
import Kontakti from "./Kontakti";
import Vidgyki from "./Vidgyki";
import Blog1 from "./Blogs/Blog1";

function App() {
  const [thisPage, setThisPage] = useState(101);
  return (
    <div className="wrap">
      <div className="wrap_2">
        <Header setThisPage={setThisPage}></Header>
        {thisPage === 0 && <MainMenu></MainMenu>}
        {thisPage === 1 && <About setThisPage={setThisPage}></About>}
        {thisPage === 2 && <Oplata setThisPage={setThisPage}></Oplata>}
        {thisPage === 3 && <Dostavka setThisPage={setThisPage}></Dostavka>}
        {thisPage === 4 && <Vidgyki setThisPage={setThisPage}></Vidgyki>}
        {thisPage === 5 && <Blog setThisPage={setThisPage}></Blog>}
        {thisPage === 6 && <Kontakti setThisPage={setThisPage}></Kontakti>}
        {thisPage === 101 && <Blog1></Blog1>}
        <Footer setThisPage={setThisPage}></Footer>
      </div>
    </div>
  );
}

export default App;
