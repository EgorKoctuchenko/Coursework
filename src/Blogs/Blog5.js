import React, { useState, useEffect } from "react";
import blog5 from "../img/blog5.png";
import blog5_2 from "../img/blog5_2.jpg";
import gal from "../img/Galochka4.svg";
import LeftA from "../img/ArrowLeft.svg";
import RightA from "../img/ArrowRight.svg";
import "../index.css";

function App(props) {
  return (
    <main className="b1_wrap">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "}{" "}
        <span onClick={() => props.setThisPage(5)} className="golovna">
          Блог
        </span>
        {" › "}{" "}
        <span
          className="fixingBlogSpace"
          style={{ color: "rgb(255, 188, 87)" }}
        >
          Що краще вибрати для кухні – стільці чи кухонний куточок?
        </span>
      </section>
      <h1>Що краще вибрати для кухні – стільці чи кухонний куточок?</h1>
      <article className="b1_info">
        <div className="b1_Fotos">
          <img className="b1_Foto" src={blog5}></img>
          <img className="b1_Foto" src={blog5_2}></img>
        </div>
        <div className="fixingParag">
          <div>
            <p>
              При облаштуванні кухні одним з ключових питань є вибір між
              стільцями і кухонним куточком. Обидва варіанти мають свої переваги
              і недоліки, тому важливо обміркувати кожен з них перед прийняттям
              рішення. Давайте розглянемо ці аспекти ближче:
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "600" }}>
              <br />
              Стільці:
            </p>
          </div>
          <div>
            <p>
              <br />
              Стільці - це класичний вибір для кухонного обіднього столу. Ось
              деякі переваги стільців:
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Гнучкість в розміщенні: Стільці можна розмістити навколо столу
              так, щоб вони не займали багато місця і дозволяли вам вільно
              рухатися по кухні. Це особливо корисно у невеликих кухнях, де
              кожен сантиметр цінується.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Різноманітність стилів і дизайну: Стільці можуть бути виконані в
              різних стилях та кольорах, що дозволяє вам підібрати їх до
              будь-якого інтер'єру кухні. Від сучасних металевих до класичних
              дерев'яних - ви завжди знайдете варіант, який відповідає вашим
              вподобанням.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Легкість у догляді: Стільці зазвичай мають просту конструкцію, що
              робить їх легкими у догляді. Вони легко миються і підтримуються в
              чистоті, що дозволяє зберігати вашу кухню в порядку.
            </p>
          </div>
          <div>
            <p>
              При облаштуванні кухні одним з ключових питань є вибір між
              стільцями і кухонним куточком. Обидва варіанти мають свої переваги
              і недоліки, тому важливо обміркувати кожен з них перед прийняттям
              рішення. Давайте розглянемо ці аспекти ближче:
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "600" }}>
              <br />
              Кухонний куточок:
            </p>
          </div>
          <div>
            <p>
              <br />
              Кухонний куточок, або їдальня в кухні, - це інший популярний
              варіант для кухонного обіднього столу. Ось деякі переваги
              кухонного куточка:
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Затишок і комфорт: Кухонний куточок зазвичай створює затишну та
              зігріту атмосферу, ідеальну для сімейних сніданків та вечерь. Він
              може стати улюбленим місцем для вашої родини, де ви можете
              проводити багато часу разом.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Зберігання: Багато кухонних куточків мають вбудовані шухляди або
              скриньки для зберігання, що робить їх функціональними і
              практичними. Вони дозволяють зберігати різноманітні кухонні
              прилади та посуд поруч із столом.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Економія простору: Кухонний куточок може ефективно використовувати
              кутові простори кухні, що робить його ідеальним варіантом для
              маленьких кухонь.
            </p>
          </div>
        </div>
      </article>
      <div className="b_Buttons">
        {props.isPage !== 101 ? (
          <button
            className="b1_isActive"
            onClick={() => props.setThisPage(props.isPage - 1)}
          >
            <img src={LeftA}></img>Попередня стаття
          </button>
        ) : (
          <button className="b1_noActive">
            <img src={LeftA}></img>Попередня стаття
          </button>
        )}
        {props.isPage !== 106 ? (
          <button
            className="b1_isActive"
            onClick={() => props.setThisPage(props.isPage + 1)}
          >
            Наступна стаття <img src={RightA}></img>
          </button>
        ) : (
          <button className="b1_noActive">
            Наступна стаття<img src={RightA}></img>
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
