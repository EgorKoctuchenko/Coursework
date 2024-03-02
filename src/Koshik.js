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
  const [formData, setFormData] = useState({
    id_zamov: 2,
    fio: "",
    email: "",
    tel: "",
    dostavka: "",
    sposobOplata: "",
    comment: "",
    tovar: "",
    inshaLudina: "",
    price: 0,
  });
  // Стейтмент для кожного інпута
  const [fio2, setFio] = useState("");
  const [tel2, setTel] = useState("");
  const [email2, setEmail] = useState("");
  const [comment2, setComment] = useState("");
  const [insha2, setInsha] = useState(0);
  const handleInsha = () => {
    setInsha((previnsha2) => !previnsha2);
  };

  // Зміни в інпуті
  const handleFioChange = (e) => setFio(e.target.value);
  const handleTelChange = (e) => setTel(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  const [data, setData] = useState([]);

  const [dostav, setDostav] = useState(0);
  const [checB, setChecB] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  //Дані для "вибор оплати":
  const oplataMethod = () => {
    let textMethod = "";
    switch (checB) {
      case 1:
        textMethod = "Готівкою при отриманні (Післясплата)";
        break;
      case 2:
        textMethod = "Оплата карткою на сайті";
        break;
      case 3:
        textMethod = "Privat Pay";
        break;
      case 4:
        textMethod = "Кредит від Krovato";
        break;
      case 5:
        textMethod = "Оплата частинами ПриватБанк";
        break;
      case 6:
        textMethod = "Оплата частинами МоноБанк";
        break;
    }
    return textMethod;
  };

  //Відправка даних
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_zamov: 2,
          fio: fio2,
          email: email2,
          tel: tel2,
          dostavka:
            dostav !== 0
              ? dostav === 1
                ? "Доставка Нова Пошта"
                : "Доставка кур'єром"
              : "Самовивіз із магазину",
          sposobOplata: oplataMethod(),
          comment: comment2,
          tovar: "asd",
          inshaLudina: insha2,
          price: 100,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Очистить форму после успешной отправки данных
      setFio("");
      setEmail("");
      setTel("");
      setComment("");
      setInsha(0);
      setDostav(0);
      setChecB(0);
      alert("Данные успешно отправлены!");
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке данных");
    }
  };

  //Отримання даних інформації "що саме ми обрали"
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
              <input
                type="text"
                value={fio2}
                onChange={handleFioChange}
                placeholder="ПІБ"
              ></input>
              <input
                type="tel"
                value={tel2}
                onChange={handleTelChange}
                placeholder="Контактний телефон"
              ></input>
              <input
                type="email"
                value={email2}
                onChange={handleEmailChange}
                placeholder="E-mail"
              ></input>
            </div>
            <div className="k_sec1_insha">
              <input onClick={() => handleInsha()} type="checkbox"></input>
              <h6>Отримуватиме замовлення інша людина</h6>
            </div>
          </section>
          <section className="k_sec2">
            <div className="k_sec2_head">
              <img src={DostavkaIcon}></img>
              <h3>Вибір способу доставки</h3>
            </div>
            <div className="k_sec2_metodDost">
              <section
                className={
                  dostav === 0 ? "k_selected" : "k_sec2_metodDost_Dost"
                }
                onClick={() => setDostav(0)}
              >
                <img src={Galochka}></img>
                <h5>Самовивіз із магазину</h5>
                <h6>Бесплатно</h6>
              </section>
              <section
                onClick={() => setDostav(1)}
                className={
                  dostav === 1 ? "k_selected" : "k_sec2_metodDost_Dost"
                }
              >
                <img src={NovaPoshta}></img>
                <h5>Доставка Нова Пошта</h5>
                <h6>≈ від 500 грн</h6>
              </section>
              <section
                onClick={() => setDostav(2)}
                className={
                  dostav === 2 ? "k_selected" : "k_sec2_metodDost_Dost"
                }
              >
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
              <input
                checked={checB === 1}
                type="checkbox"
                className="k_checkCard"
                onClick={() => setChecB(1)}
              ></input>
              <h6>Готівкою при отриманні (Післясплата)</h6>
            </div>
            <div className="k_oplata_card">
              <input
                checked={checB === 2}
                type="checkbox"
                className="k_checkCard"
                onClick={() => setChecB(2)}
              ></input>
              <h6>Оплата карткою на сайті</h6>
            </div>
            <div className="k_oplata_card">
              <input
                checked={checB === 3}
                type="checkbox"
                className="k_checkCard"
                onClick={() => setChecB(3)}
              ></input>
              <h6>Privat Pay</h6>
            </div>
            <div className="k_oplata_card">
              <input
                checked={checB === 4}
                type="checkbox"
                className="k_checkCard"
                onClick={() => setChecB(4)}
              ></input>
              <h6>Кредит від Krovato</h6>
            </div>
            <div className="k_oplata_card">
              <input
                checked={checB === 5}
                type="checkbox"
                className="k_checkCard"
                onClick={() => setChecB(5)}
              ></input>
              <h6>Оплата частинами ПриватБанк</h6>
            </div>
            <div className="k_oplata_card">
              <input
                checked={checB === 6}
                type="checkbox"
                className="k_checkCard"
                onClick={() => setChecB(6)}
              ></input>
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
              value={comment2}
              onChange={handleCommentChange}
            ></textarea>
          </section>
          <button type="submit">asdasdasdasd</button>
        </form>
        <section className="k_right">
          <div className="k_upp">
            <h3>Кошик: {data.filter((item) => item.korzina === 1).length}</h3>
          </div>
        </section>
      </article>

      <Sposobi></Sposobi>
    </main>
  );
}

export default Koshik;
