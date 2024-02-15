import React, { useState, useEffect } from "react";
import Terminal from "./img/terminal.svg";
import privat from "./img/privatBank.svg";
import bezgotivka from "./img/bezgotivka.svg";
import pisla from "./img/pislaPlata.svg";
import ukraine from "./img/ukraine.svg";
import kredit from "./img/Kredito.svg";
import galochka from "./img/galochka.svg";
import "./index.css";
import foto1 from "./img/mob-oplata.png";

function App() {
  return (
    <main className="o_wrap">
      <section className="this_choice">
        Головна {" › "}{" "}
        <span style={{ color: "rgb(255, 188, 87)" }}>Оплата</span>
      </section>
      <article className="o_oplata">
        <section>
          <h1>Оплата товару</h1>
          <h3>
            Клієнти Krovato можуть в один клік провести оплату товару на сайті.
          </h3>
          <h4>
            Оплата готівкою при отриманні товару, за безготівковим розрахунком,
            оплата замовлення онлайн банківською картою Visa або MasterCard або
            кредит - у нас можливо все!
          </h4>
        </section>
        <img src={foto1}></img>
      </article>
      <article className="o_PoKievy">
        <h1>Оплата по Києву:</h1>
        <div>
          <section className="o_info">
            <div>
              <img src={Terminal}></img>
            </div>
            <h3>Через термінал</h3>
            <p>
              Ви можете оплатити Ваше замовлення карткою на нашій виставці за
              адресою: пров. Ізяславський 52, поверх 2
            </p>
          </section>
          <section className="o_info o_infoFix1">
            <div>
              <img src={privat}></img>
            </div>
            <h3>На карту ПриватБанку</h3>
            <p>
              Ви можете це зробити через термінал самообслуговування, або
              Приват24.
            </p>
          </section>
          <section className="o_info o_infoFix2">
            <div>
              <img src={bezgotivka}></img>
            </div>
            <h3>Безготівкова</h3>
            <p>
              Оплата проводиться в касі відділення будь-якого банку або з
              розрахункового рахунку Вашої фірми.
            </p>
          </section>
          <section className="o_info o_infoFix3">
            <div>
              <img src={pisla}></img>
            </div>
            <h3>Післяплатою</h3>
            <p>
              Оплата готівкою безпосередньо при отриманні і перевірці товару від
              кур'єра.
            </p>
          </section>
        </div>
      </article>
      <article>
        <section className="o_info2">
          <div>
            asd
            <img src={ukraine}></img>
          </div>
        </section>
        <section className="o_info2">
          <img src={kredit}></img>
        </section>
        <section className="o_info2">
          <img src={galochka}></img>
        </section>
      </article>
    </main>
  );
}

export default App;
