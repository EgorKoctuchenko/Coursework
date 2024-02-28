import React, { useState, useEffect } from "react";
import YesAv from "./img/YesAv.svg";
import NoAv from "./img/NoAv.svg";
import korzina from "./img/korzina.svg";
import Korzinka from "./img/Korzinka.svg";
import like from "./img/obrane.svg";
import like2 from "./img/obrane2.svg";
import DostavkaImg from "./img/dostavka.svg";
import OplataImg from "./img/Oplata.svg";
import Garanty from "./img/Garanti.svg";
import Pidtrym from "./img/Pidtrimka.svg";
import Sposobi from "./Sposobi";
import arrowUp from "./img/ArrowUp.svg";
import "./index.css";
import Dostavka from "./Dostavka";

function InfoTovar(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [allKolvo, setAllKolvo] = useState(1);

  const handlePlusKolvo = () => {
    allKolvo === props.infoMassiv[2]
      ? setAllKolvo(allKolvo)
      : setAllKolvo(allKolvo + 1);
  };
  const handleMinusKolvo = () => {
    allKolvo === 1 ? setAllKolvo(allKolvo) : setAllKolvo(allKolvo - 1);
  };

  //Отримання даних для фото
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/data");

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const jsonData = await response.json();

      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Ошибка при запросе:", error.message);
    }
  };
  return (
    <main className="it_wrap">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "}{" "}
        <span
          className="golovna"
          onClick={() => {
            props.setThisPage(7);
            props.setTypee(props.infoMassiv[6]);
          }}
        >
          {props.infoMassiv[6]}
        </span>{" "}
        {" › "}
        <span style={{ color: "rgb(255, 188, 87)" }}>
          {props.infoMassiv[3]}
        </span>
      </section>
      <article className="it_upp">
        {data
          .filter((item) => item.name === props.infoMassiv[3])
          .map((item) => (
            <img
              key={item.id}
              className="it_upp_foto"
              src={require("./Image_Storage/" +
                item.imageUrl.replace("http://localhost:3001", ""))}
              alt={`Image ${item.id}`}
            />
          ))}
        <section className="it_upp_right">
          <h1>{props.infoMassiv[3]}</h1>
          <div className="it_upp_right_line">
            {props.infoMassiv[10] === "В наявності" ? (
              <div className="m_Avab">
                <img src={YesAv}></img>
                <p className="m_Nayav">В наявності</p>
              </div>
            ) : (
              <div className="m_Avab">
                <img src={NoAv}></img>
                <p className="m_Nayav">Немає в наявності</p>
              </div>
            )}
            <h6>Залишилось: {props.infoMassiv[2]}</h6>
          </div>
          <div className="it_upp_right_btm">
            <div className="it_upp_right_btm1">
              <h2>{props.infoMassiv[1].toLocaleString()} грн.</h2>
              <div className="it_upp_right_btm1_like">
                {props.infoMassiv[8] === "0" ? (
                  <img className="m_Like" src={like2}></img>
                ) : (
                  <img className="m_Like" src={like}></img>
                )}
                <h5>В обране</h5>
              </div>
            </div>
            <div className="it_line"></div>
            <div className="it_upp_right_btm2">
              <h2>Характеристики:</h2>
              <div>
                <h5>Тип:</h5>
                <h5>{props.infoMassiv[6]}</h5>
              </div>
              <div>
                <h5>Виробник:</h5>
                <h5>{props.infoMassiv[5]}</h5>
              </div>
              <div>
                <h5>Висота (см):</h5>
                <h5>{props.infoMassiv[9].split(" ")[0]}</h5>
              </div>
              <div>
                <h5>Довжина (см):</h5>
                <h5>{props.infoMassiv[9].split(" ")[2]}</h5>
              </div>
              <div>
                <h5>Ширина (см):</h5>
                <h5>{props.infoMassiv[9].split(" ")[4]}</h5>
              </div>
            </div>
            <div className="it_buy">
              <div className="it_buy_kolvo">
                <p onClick={handleMinusKolvo}>-</p>
                <h5>{allKolvo}</h5>
                <p onClick={handlePlusKolvo}>+</p>
              </div>
              <button>
                <img src={Korzinka}></img>
                Купити
              </button>
            </div>
          </div>
        </section>
      </article>

      <Sposobi></Sposobi>
    </main>
  );
}

export default InfoTovar;
