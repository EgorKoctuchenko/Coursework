import React, { useState, useEffect } from "react";
import blog2 from "../img/blog2.png";
import blog2_2 from "../img/blog2_2.png";
import blog2_3 from "../img/blog2_3.png";
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
          Диван ваших мрій. Чи потрібен він вам?
        </span>
      </section>
      <h1>Диван ваших мрій. Чи потрібен він вам?</h1>
      <article className="b1_info">
        <div className="fixingParag">
          <div>
            <p>
              Диван - це не просто меблі. Він є центром затишку та комфорту у
              нашому будинку. Це місце, де ми відпочиваємо, проводимо час з
              родиною та друзями, дивимося фільми і читаємо улюблені книги.
              Кожен з нас мріє про ідеальний диван, але чи потрібен він кожному
              з нас?
              <br />
              <br />
              Відповідь на це запитання залежить від багатьох факторів, таких як
              ваші потреби, стиль життя, розмір інтер'єру та бюджет. Перш ніж
              вирішити, чи потрібен вам диван вашої мрії, варто розглянути
              кілька ключових аспектів:
              <br />
              <br />
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              По-перше, зважте на ваші потреби. Якщо ви любите проводити багато
              часу вдома, зазвичай приймаєте гостей або просто цінуєте комфорт,
              то ідеальний диван може бути невід'ємною частиною вашого будинку.
              Великий, зручний диван забезпечить комфортне місце для відпочинку
              для всієї родини.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              По-друге, важливо врахувати стиль вашого життя та інтер'єру. Якщо
              ваш простір оформлений у сучасному стилі, вам може підійти диван з
              чистими лініями та мінімалістичним дизайном. У той же час, для
              класичного інтер'єру може бути відмінним вибором диван з
              елегантними дерев'яними деталями та оббивкою з натуральної
              тканини.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              По-третє, розмір вашого простору грає важливу роль у виборі
              дивана. Якщо у вас маленька кімната, вам може бути зручніше обрати
              компактний диван або навіть розкладний варіант, щоб зекономити
              місце. У великому просторі ви можете дозволити собі більш великий
              диван або навіть розгортати його у велике ліжко для гостей.
            </p>
          </div>
          <div>
            <p>
              <br />
              На останок, але не менш важливо - ваш бюджет. Дивани можуть мати
              різні цінові категорії в залежності від матеріалів, розміру,
              бренду та дизайну. Варто розглянути ваші фінансові можливості та
              зробити вибір, який буде найбільш оптимальним для вас.
              <br /> <br />
              Отже, чи потрібен вам диван вашої мрії? Відповідь на це запитання
              залежить від ваших індивідуальних потреб і обставин. Важливо
              зважити всі за й проти, ретельно розглянути всі аспекти і зробити
              обдуманий вибір, який відповідає вашим потребам і бюджету.
            </p>
          </div>
        </div>
        <div className="b1_Fotos">
          <img className="b1_Foto" src={blog2}></img>
          <img className="b1_Foto" src={blog2_2}></img>
          <img className="b1_Foto" src={blog2_3}></img>
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
