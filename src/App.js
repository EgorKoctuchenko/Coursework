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
import Kategorii from "./Kategorii";
import ListTovar from "./ListTovar";
import InfoTovar from "./InfoTovar";
import Koshik from "./Koshik";
import Likes from "./Likes";
import Blog1 from "./Blogs/Blog1";
import Blog2 from "./Blogs/Blog2";
import Blog3 from "./Blogs/Blog3";
import Blog4 from "./Blogs/Blog4";
import Blog5 from "./Blogs/Blog5";
import Blog6 from "./Blogs/Blog6";
import Buf from "./Buf";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    // Устанавливаем начальное состояние и добавляем слушатель событий для изменения размера окна
    handleResize();
    window.addEventListener("resize", handleResize);

    // Удаляем слушатель событий при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  ///

  const [thisPage, setThisPage] = useState(0);
  const [Categ, setCateg] = useState(false);
  const [Likese, setLikese] = useState(false);
  const [typee, setTypee] = useState("Ліжко");
  const [infoMassiv, setInfoMassiv] = useState([]);

  const handlePageChange = (numb) => {
    window.scrollTo(0, 0);
    setThisPage(numb);
  };

  const handleInfoMassiv = (
    id,
    price,
    kolvo,
    name,
    photo,
    virobnik,
    type,
    korzina,
    like,
    sizes,
    availability
  ) => {
    setInfoMassiv([
      id,
      price,
      kolvo,
      name,
      photo,
      virobnik,
      type,
      korzina,
      like,
      sizes,
      availability,
    ]);
  };
  return (
    <div className="wrap">
      <div className="wrap_2">
        <Header
          setLikese={setLikese}
          setThisPage={setThisPage}
          setCateg={setCateg}
          Categ={Categ}
          isSmallScreen={isSmallScreen}
        ></Header>
        {Categ === true && (
          <Kategorii
            setCateg={setCateg}
            setTypee={setTypee}
            setThisPage={handlePageChange}
          ></Kategorii>
        )}
        {thisPage === 200 && <Buf />}
        {thisPage === 0 && (
          <MainMenu
            handleInfoMassiv={handleInfoMassiv}
            setThisPage={handlePageChange}
          ></MainMenu>
        )}
        {thisPage === 1 && <About setThisPage={handlePageChange}></About>}
        {thisPage === 2 && <Oplata setThisPage={handlePageChange}></Oplata>}
        {thisPage === 3 && (
          <Dostavka
            isSmallScreen={isSmallScreen}
            setThisPage={handlePageChange}
          ></Dostavka>
        )}
        {thisPage === 4 && <Vidgyki setThisPage={handlePageChange}></Vidgyki>}
        {thisPage === 5 && <Blog setThisPage={handlePageChange}></Blog>}
        {thisPage === 6 && <Kontakti setThisPage={handlePageChange}></Kontakti>}
        {thisPage === 7 && (
          <ListTovar
            typee={typee}
            setThisPage={handlePageChange}
            handleInfoMassiv={handleInfoMassiv}
          ></ListTovar>
        )}
        {thisPage === 8 && (
          <InfoTovar
            infoMassiv={infoMassiv}
            setTypee={setTypee}
            setThisPage={setThisPage}
          ></InfoTovar>
        )}
        {thisPage === 9 && <Koshik setThisPage={handlePageChange}></Koshik>}
        {Likese === true && (
          <Likes
            handleInfoMassiv={handleInfoMassiv}
            setLikese={setLikese}
            setThisPage={handlePageChange}
          ></Likes>
        )}
        {thisPage === 101 && (
          <Blog1 setThisPage={handlePageChange} isPage={thisPage}></Blog1>
        )}
        {thisPage === 102 && (
          <Blog2 setThisPage={handlePageChange} isPage={thisPage}></Blog2>
        )}
        {thisPage === 103 && (
          <Blog3 setThisPage={handlePageChange} isPage={thisPage}></Blog3>
        )}
        {thisPage === 104 && (
          <Blog4 setThisPage={handlePageChange} isPage={thisPage}></Blog4>
        )}
        {thisPage === 105 && (
          <Blog5 setThisPage={handlePageChange} isPage={thisPage}></Blog5>
        )}
        {thisPage === 106 && (
          <Blog6 setThisPage={handlePageChange} isPage={thisPage}></Blog6>
        )}
        <Footer
          setCateg={setCateg}
          setTypee={setTypee}
          setThisPage={handlePageChange}
        ></Footer>
      </div>
    </div>
  );
}

export default App;
