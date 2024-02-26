import React, { useState, useEffect } from "react";
import blog4 from "../img/blog4.png";
import blog4_1 from "../img/blog4_1.png";
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
          Стільці для вітальні. Як правильно вибрати?
        </span>
      </section>
      <h1>Стільці для вітальні. Як правильно вибрати?</h1>
      <article className="b1_info">
        <div className="b1_Fotos">
          <img className="b1_Foto" src={blog4}></img>
          <img className="b1_Foto" src={blog4_1}></img>
        </div>
        <div className="fixingParag">
          <div>
            <p>
              Стільці для вітальні відіграють важливу роль у створенні затишного
              та функціонального простору для вашої родини та гостей. Правильний
              вибір стільців може значно підвищити зручність та естетичний
              вигляд вашого приміщення. Ось декілька порад, як правильно вибрати
              стільці для вашої вітальні:
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Враховуйте розмір і пропорції приміщення: Перш ніж обирати
              стільці, виміряйте простір, доступний для них у вашій вітальні.
              Важливо врахувати розміри стільців, щоб вони гармонійно
              вписувалися у приміщення і не перенавантажували простір.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Підбирайте стільці відповідно до стилю вашого інтер'єру: Ретельно
              обирайте стільці, які відповідають загальному стилю вашого
              приміщення. Наприклад, для сучасного інтер'єру можуть підійти
              стільці з мінімалістичним дизайном, а для класичного - стільці з
              елегантними дерев'яними деталями.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Звертайте увагу на комфортність: Комфорт - ключовий аспект при
              виборі стільців для вітальні. Переконайтеся, що стільці
              забезпечують достатню підтримку спини і мають комфортне сидіння.
              Варто також звернути увагу на висоту сидіння, щоб вона відповідала
              вашим потребам.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Розгляньте матеріал: Обирайте стільці, виготовлені з якісних та
              довговічних матеріалів. Вони повинні бути стійкими до зносу та
              легко чиститися. Дерево, метал, тканина - обирайте той матеріал,
              який відповідає вашим вимогам і стилю інтер'єру.
            </p>
          </div>
          <div>
            <img src={gal}></img>
            <p>
              Підберіть кольори та відтінки відповідно до загального палітри:
              Пам'ятайте про гармонію кольорів у вашій вітальні. Вибирайте
              стільці, які доповнюють або контрастують з іншими елементами
              декору, створюючи затишну та стильну атмосферу.
            </p>
          </div>
          <div>
            <p>
              Вибір стільців для вітальні - це важливе рішення, яке варто робити
              обдумано. Слід керуватися не лише зовнішнім виглядом, але й
              комфортом і функціональністю. Якщо ви дотримуватиметеся цих порад,
              ви зможете створити простір, який буде не лише зручним, але й
              приємним для очей і душі.
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
