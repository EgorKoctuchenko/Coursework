import React, { useState, useEffect } from "react";
import infoPokup from "./img/infoPokup.svg";
import DostavkaIcon from "./img/DostavkaIcon.svg";
import NovaPoshta from "./img/NovaPoshta.svg";
import kyrier from "./img/Kyrier.svg";
import Galochka from "./img/Galochka4.svg";
import Oplata from "./img/SposibOplati.svg";
import KomZam from "./img/KomZamov.svg";
import Sposobi from "./Sposobi";
import "./index.css";

function Koshik(props) {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    id_zamov: 1,
    fio: "a",
    email: "b",
    tel: "c",
    dostavka: "d",
    sposobOplata: "e",
    comment: "f",
    tovar: "g",
    inshaLudina: "h",
    price: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  //Відправка даних
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Очистить форму после успешной отправки данных
      setFormData({
        id_zamov: 0,
        fio: "",
        email: "",
        tel: "",
        dostavka: "",
        sposobOplata: "",
        comment: "",
        tovar: "",
        inshaLudina: 0,
        price: 0,
      });
      alert("Данные успешно отправлены!");
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке данных");
    }
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
    <main className="k_wrap">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "} <span style={{ color: "rgb(255, 188, 87)" }}>Кошик</span>
      </section>
      <h1 className="k_h1">Оформлення замовлення</h1>
      <article className="k_content">
        <form className="k_form" onSubmit={handleSubmit}>
          <section className="k_sec1">
            <div className="k_sec1_head">
              <img src={infoPokup}></img>
              <h3>Інформація про покупця</h3>
            </div>
            <div className="k_sec1_cont">
              <input type="text" placeholder="ПІБ"></input>
              <input type="tel" placeholder="Контактний телефон"></input>
              <input type="email" placeholder="E-mail"></input>
            </div>
            <div className="k_sec1_insha">
              <input type="checkbox"></input>
              <h6>Отримуватиме замовлення інша людина</h6>
            </div>
          </section>
          <section className="k_sec2">
            <div className="k_sec2_head">
              <img src={DostavkaIcon}></img>
              <h3>Вибір способу доставки</h3>
            </div>
            <div className="k_sec2_metodDost">
              <section>
                <img src={Galochka}></img>
                <h5>Самовивіз із магазину</h5>
                <h6>Бесплатно</h6>
              </section>
              <section>
                <img src={NovaPoshta}></img>
                <h5>Доставка Нова Пошта</h5>
                <h6>≈ від 500 грн</h6>
              </section>
              <section>
                <img src={kyrier}></img>
                <h5>Доставка кур'єром</h5>
                <h6>≈ від 200 грн</h6>
              </section>
            </div>
          </section>
          <section className="k_sec3">
            <div className="k_sec3_head">
              <img src={Oplata}></img>
              <h3>Вибір способу оплати</h3>
            </div>
            <div className="k_oplata_card">
              <input type="checkbox" className="k_checkCard"></input>
              <h6>Готівкою при отриманні (Післясплата)</h6>
            </div>
            <div className="k_oplata_card">
              <input type="checkbox" className="k_checkCard"></input>
              <h6>Оплата карткою на сайті</h6>
            </div>
            <div className="k_oplata_card">
              <input type="checkbox" className="k_checkCard"></input>
              <h6>Privat Pay</h6>
            </div>
            <div className="k_oplata_card">
              <input type="checkbox" className="k_checkCard"></input>
              <h6>Кредит від Krovato</h6>
            </div>
            <div className="k_oplata_card">
              <input type="checkbox" className="k_checkCard"></input>
              <h6>Оплата частинами ПриватБанк</h6>
            </div>
            <div className="k_oplata_card">
              <input type="checkbox" className="k_checkCard"></input>
              <h6>Оплата частинами МоноБанк</h6>
            </div>
          </section>
          <section className="k_sec4">
            <div className="k_sec4_head">
              <img src={KomZam}></img>
              <h3>Коментар до замовлення</h3>
            </div>
            <textarea
              className="k_sec4_area"
              placeholder="Ваш коментар"
            ></textarea>
          </section>
          <button type="submit">asdasdasdasd</button>
        </form>
        <section className="k_right"></section>
      </article>

      <Sposobi></Sposobi>
    </main>
  );
}

export default Koshik;
