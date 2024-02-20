import React, { useState, useEffect } from "react";
import telephone from "./img/Telephone.svg";
import mail from "./img/Mail.svg";
import karta from "./img/Karta.svg";
import graf from "./img/graf.svg";
import whats from "./img/whatsapp.svg";
import tg from "./img/telegram.svg";
import viber from "./img/viber.svg";
import facebook from "./img/facebook.svg";
import insta from "./img/instagram.svg";
import adress from "./img/mob-adres.png";
import map from "./img/map.png";
import paragraf from "./img/ParagrafTG.svg";
import karta2 from "./img/Karta2.svg";
import Sposobi from "./Sposobi";
import "./index.css";

function Kontakti(props) {
  return (
    <main className="k_wrap">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "}
        <span style={{ color: "rgb(255, 188, 87)" }}>Контакти</span>
      </section>
      <h1 className="k_h1">Контакти</h1>
      <article className="k_info">
        <section>
          {" "}
          <img src={telephone} />
          <div>
            <h6>Телефони:</h6>
            <h4>
              +38 067 929-45-45
              <br />
              +38 050 133-45-45
              <br />
              +38 093 170-75-45
            </h4>
          </div>
        </section>
        <section>
          {" "}
          <img src={mail} />
          <div>
            <h6>Напишіть нам:</h6>
            <h4>info.krovato@gmail.com</h4>
            <div>
              <img src={whats} />
              <img src={tg} />
              <img src={viber} />
              <img src={facebook} />
              <img src={insta} />
            </div>
          </div>
        </section>
        <section>
          {" "}
          <img src={karta} />
          <div>
            <h6>Де ми знаходимось:</h6>
            <h4>
              м. Київ провулок <br /> Ізяславський 52, пов. 2
            </h4>
          </div>
        </section>
        <section>
          {" "}
          <img src={graf} />
          <div>
            <h6>Графік роботи:</h6>
            <h4>
              Працюємо щодня <br /> з 9:00 до 18:00
            </h4>
          </div>
        </section>
      </article>
      <article className="k_adress">
        <img className="k_adres" src={adress} />
        <img className="k_map" src={map} />
      </article>
      <article className="k_dostat">
        <h2>Як дістатися до нашої виставки «Кровато» від метро:</h2>
        <section>
          <div className="k_first">
            <div>
              <img src={paragraf} />
              <p>
                Від ст. м. «Святошино» - маршрутне таксі № 461 виходити на
                зупинці «Путопровід».{" "}
              </p>
            </div>
            <div>
              <img src={paragraf} />
              <p>
                Від ст. м. «Академмістечко» — маршрутне таксі № 56, 56Д у
                напрямку Кільцевої дороги, повз завод «Електронмаш», зуп.
                «Литвиненко-Вольгемут», минаючи поворот на Софіївську Борщагівку
                та Вишневе, зупинка одразу за Жулянським мостом, виходити на
                зупинці «Путопровід».{" "}
              </p>
            </div>
            <div>
              <img src={paragraf} />
              <p>
                Від ст. м. «Васильківська» — маршрутне таксі № 208, 56Д, 904 у
                напрямку Кільцевої дороги, виходити на зупинці «Путопровід».{" "}
              </p>
            </div>
          </div>
          <div className="k_second">
            <div>
              <img src={paragraf} />
              <p>
                Від ст. м (Виставкового центру) — автобус 56 та маршрутне таксі
                № 208,499,461,904 у напрямку Кільцевої дороги, виходити на
                зупинці «Путепровід».{" "}
              </p>
            </div>
            <div>
              <img src={paragraf} />
              <p>
                Від м.Вишневе, маршрутним таксі 718, виходити на зупинці
                (Путопровід).{" "}
              </p>
            </div>
            <div>
              <img src={paragraf} />
              <p>
                Від Севастопольської площі, маршрутне таксі 496, 499, виходити
                на зупинці (Путопровід ).{" "}
              </p>
            </div>
          </div>
        </section>
        <div className="k_wrapBut">
          <button className="k_but">
            <img src={karta2} />
            Прогласти маршрут
          </button>
        </div>
      </article>
      <article className="k_otpravka">
        <section>
          <h1>Напишіть нам!</h1>
          <h3>
            Якщо у вас є побажання щодо якості обслуговування, пропозиції щодо
            партнерства, напишіть нам і наше керівництво зв`яжеться з вами!
          </h3>
          <h2>Або чекаємо на вас у гості!</h2>
        </section>
        <form>
          <input type="text" placeholder="Ваше ім'я прізвище" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Контактний телефон" />
          <textarea
            id="text"
            rows="4"
            cols="50"
            placeholder="Ваш коментар або питання"
            readonly
          ></textarea>
          <button className="k_but2">Відправити</button>
        </form>
      </article>
      <Sposobi></Sposobi>
    </main>
  );
}

export default Kontakti;
