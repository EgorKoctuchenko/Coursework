import React, { useState, useEffect } from "react";
import Kyiv from "./img/Kyiv.svg";
import galochka from "./img/galocha2.svg";
import dostavka_logo from "./img/mob-dostavka.png";
import UkraineMap from "./img/UkraineMap.png";
import star from "./img/star.svg";
import Sposobi from "./Sposobi";
import Pitanna from "./Pitanna";
import "./index.css";

function Dostavka(props) {
  return (
    <main className="d_wrap">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "}
        <span style={{ color: "rgb(255, 188, 87)" }}>Доставка та збірка</span>
      </section>
      <article className="d_Dostavka">
        <section>
          <h1>Доставка та збірка</h1>
          <h3>Доставка онлайн замовлень по всій Україні</h3>
          <h4>
            Робимо доставку власним транспортом та в усі працюючі відділення
            Нової Пошти. Оплата доставки і збірки здійснюється в момент
            отримання товару.
          </h4>
        </section>
        <img src={dostavka_logo} />
      </article>
      <article className="d_poKyiv">
        <div>
          <h1>Доставка по Києву та Київській області:</h1>
          <div>
            <img src={galochka} />
            <h4>
              Доставка ліжка чи матраца від 6000 грн. по Києву безкоштовна.
            </h4>
          </div>
          <div>
            <img src={galochka} />
            <h4>
              У доставку входить підйом на поверх ліфтом та занесення до
              квартири (занесення сходами оплачується додатково)
            </h4>
          </div>
          <div>
            <img src={galochka} />
            <h4>Доставка дивана до під'їзду по Києву безкоштовна.</h4>
          </div>
          <br />
          <br />
          <h4>
            Доставка так само безкоштовна у: Вишневе, Петропавлівська
            Борщагівка, Софіївська Борщагівка, Новосілки, Чайки, Коцюбинське
          </h4>
          <br />
          <br />
          <h4>
            Доставка у міста: Вишгород - 200 грн, Бровари - 250 грн, Бориспіль -
            300 грн, Ірнінь - 200 грн, Буча - 250 грн, Гостомель - 300 грн
          </h4>
        </div>
        <img className="d_imgKyiv" src={Kyiv} />
      </article>
      <article className="d_poUkraine">
        <div>
          <h1>Доставка по Україні:</h1>
          <div>
            <img src={galochka} />
            <h4>
              Доставка по Україні здійснюється за рахунок клієнта на відділення
              або адресно клієнту перевізником: "Нової Пошти, Міст експрес,
              Автолюкс".
            </h4>
          </div>
          <div>
            <img src={galochka} />
            <h4>
              Металеві ліжка доставляють за межі Київської області "Новою
              поштою" адресно за рахунок клієнта (орієнтовна вартість доставки
              250-300 грн).
            </h4>
          </div>
          <div>
            <img src={galochka} />
            <h4>
              "Додаткова" відправка, наприклад (ящиків, тумб або комода)
              оплачується клієнтом.
            </h4>
          </div>
          <br />
          <br />
          <h4 className="d_h4Text">
            Послуга «Податковий платіж» – (оплата при отриманні замовлення),
            додатково до вартості замовлення оплачується +1.5-2% за послугу
            післяплати, залежно від обраного оператора вантажоперевезень.
            <br />
            <br />
            Послуга «Утилізація старих меблів» – розраховується, виходячи з
            габаритів меблів або матраца і становить від 50 до 400грн. Додатково
            оплачується винесення меблів згідно з тарифами, на занесення товару.
          </h4>
        </div>
        <img className="d_UkraineMap" src={UkraineMap} />
      </article>
      <p className="d_Note">
        *В усіх випадках зазначена вартість доставки до під'їзду (воріт
        приватного будинку). У базову вартість доставки не входить вартість
        занесення меблів. Занесення товару на поверх/у квартиру здійснюється за
        домовленістю за окрему оплату. <br /> <br />
        **Додаткове упакування товару оплачується клієнтом у будь-якому випадку!
        Увага! Вартість доставки вказана до парадного будинку (воріт приватного
        будинку) і не враховує занесення товару. Занесення товару здійснюється
        за домовленістю за окрему оплату згідно з тарифами, на занесення товару.
      </p>
      <article className="d_akcii">
        <h1>Акції доставки</h1>
        <div className="d_A-Info">
          <div>
            <img src={star} />
            <h4>
              При покупці ліжка з матрацом більше 7000 грн. (вартість матрацу)
              занесення ліфтом та складання БЕЗКОШТОВНО{" "}
            </h4>
          </div>
          <div>
            <img src={star} />
            <h4>
              При покупці ліжка з матрацом більше 10000 грн. знижка 5% на матрац
              + доставка, занесення ліфтом та складання БЕЗКОШТОВНО
            </h4>
          </div>
          <div>
            <img src={star} />
            <h4>
              Купуючи матрац від 7000 грн. доставка та занесення БЕЗКОШТОВНО
            </h4>
          </div>
          <div>
            <img src={star} />
            <h4>
              Купуючи матрац від 10000 грн. доставка та занесення БЕЗКОШТОВНО +
              знижка 5% на матрац
            </h4>
          </div>
          <div>
            <img src={star} />
            <h4>
              При покупці столу та 2-х стільців доставка та занесення
              БЕЗКОШТОВНО
            </h4>
          </div>
        </div>
        <p>
          * Під покупкою ліжка з матрацом до суми "N" - мається на увазі ціна за
          матрац. ** Занесення відбувається ліфтом (по сходах занесення платне)*
          В акції не беруть участь ліжка з вбудованим матрацом. * Знижка на
          матраци ТМ Сонлайн не сумується з іншими акціями.
        </p>
      </article>
      <article className="d_Skladanna">
        <h1>Складання</h1>
        <ul>
          <li className="d_eqTwo">
            <p>Складання звичайного ліжка</p>
            300 грн
          </li>
          <li>
            <p>Складання ліжка з вбудованим матрацом</p>
            350 грн
          </li>
          <li className="d_eqTwo">
            <p>Складання ліжка з підйомним механізмом</p>
            500 грн
          </li>
          <li>
            <p>Складання прямого дивана</p>
            150 грн
          </li>
          <li className="d_eqTwo">
            <p>Складання кутового дивана</p>
            200 грн
          </li>
          <li>
            <p>Складання комода</p>
            250 грн
          </li>
          <li className="d_eqTwo">
            <p>Складання приліжкової тумби</p>
            150 грн
          </li>
          <li>
            <p>Складання столу</p>
            250 грн
          </li>
        </ul>
      </article>
      <article className="d_Zanes">
        <h1>Занесення</h1>
        {!props.isSmallScreen ? (
          <ul>
            <li className="d_ShapkaZanes">
              <span>Послуга</span>
              <span>Є лифт</span>
              <span>Ліфта немає/не працює/ щось не міститься</span>
            </li>
            <li className="d_eqTwo">
              <p>Занесення матраца</p>
              <p>Безкоштовно</p>
              <p>30 грн/поверх</p>
            </li>
            <li>
              <p>Занесення каркаса ліжка (у зібраному вигляді)</p>
              <p>Безкоштовно</p>
              <p>30 грн/поверх</p>
            </li>
            <li className="d_eqTwo">
              <p>Занесення прямого дивана**</p>
              <p>150 грн</p>
              <p>30 грн/поверх (за 1 підйомну одиницю)</p>
            </li>
            <li>
              <p>Занесення кутового дивана</p>
              <p>200 грн</p>
              <p>30 грн/поверх (за 1 підйомну одиницю)</p>
            </li>
            <li className="d_eqTwo">
              <p>Занесення комода</p>
              <p>Безкоштовно</p>
              <p>50 грн</p>
            </li>
            <li>
              <p>Занесення тумби</p>
              <p>Безкоштовно</p>
              <p>10 грн</p>
            </li>
            <li className="d_eqTwo">
              <p>Занесення стільця</p>
              <p>Безкоштовно</p>
              <p>15 грн</p>
            </li>
            <li>
              <p>Занесення столу</p>
              <p>Безкоштовно</p>
              <p>50 грн</p>
            </li>
          </ul>
        ) : (
          <div>
            <h2 className="d_zanecH2">Є лифт</h2>
            <ul>
              <li className="d_eqTwo">
                <p>Занесення матраца</p>
                <p>Безкоштовно</p>
              </li>
              <li>
                <p>Занесення каркаса ліжка (у зібраному вигляді)</p>
                <p>Безкоштовно</p>
              </li>
              <li className="d_eqTwo">
                <p>Занесення прямого дивана**</p>
                <p>150 грн</p>
              </li>
              <li>
                <p>Занесення кутового дивана</p>
                <p>200 грн</p>
              </li>
              <li className="d_eqTwo">
                <p>Занесення комода</p>
                <p>Безкоштовно</p>
              </li>
              <li>
                <p>Занесення тумби</p>
                <p>Безкоштовно</p>
              </li>
              <li className="d_eqTwo">
                <p>Занесення стільця</p>
                <p>Безкоштовно</p>
              </li>
              <li>
                <p>Занесення столу</p>
                <p>Безкоштовно</p>
              </li>
            </ul>
            <h1>Занесення</h1>
            <h2 className="d_zanecH2">
              Ліфта немає/не працює/ щось не міститься
            </h2>
            <ul>
              <li className="d_eqTwo">
                <p>Занесення матраца</p>
                <p>30 грн/поверх</p>
              </li>
              <li>
                <p>Занесення каркаса ліжка (у зібраному вигляді)</p>
                <p>30 грн/поверх</p>
              </li>
              <li className="d_eqTwo">
                <p>Занесення прямого дивана**</p>
                <p>30 грн/поверх (за 1 підйомну одиницю)</p>
              </li>
              <li>
                <p>Занесення кутового дивана</p>
                <p>30 грн/поверх (за 1 підйомну одиницю)</p>
              </li>
              <li className="d_eqTwo">
                <p>Занесення комода</p>
                <p>50 грн</p>
              </li>
              <li>
                <p>Занесення тумби</p>
                <p>10 грн</p>
              </li>
              <li className="d_eqTwo">
                <p>Занесення стільця</p>
                <p>15 грн</p>
              </li>
              <li>
                <p>Занесення столу</p>
                <p>50 грн</p>
              </li>
            </ul>
          </div>
        )}
        <p className="d_InfoZanes">
          * Занесення великогабаритних деталей, довжина яких перевищує 160*90см
          або вага перевищує 20кг коштує 30грн/поверх. **Занесення дивана, що
          складається з 1 підйомної одиниці 70 грн/поверх без ліфта. ***За
          відсутності вільного під'їзду до парадного, служба доставки самостійно
          розраховує вартість занесення до дверей.
        </p>
      </article>
      <Pitanna></Pitanna>
      <Sposobi></Sposobi>
    </main>
  );
}

export default Dostavka;
