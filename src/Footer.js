import React, { useState, useEffect } from "react";
import logo from "./img/logo-footer.svg";
import callPhone from "./img/CallPhone.svg";
import geoLocation from "./img/Geolocation.svg";
import calendar from "./img/calendar.svg";
import facebook from "./img/facebook.svg";
import insta from "./img/instagram.svg";
import whatsup from "./img/whatsapp.svg";
import telegram from "./img/telegram.svg";
import viber from "./img/viber.svg";
import visa from "./img/ProvidedByVisa.svg";
import mCard from "./img/ProvidedByMasterCard.svg";
import "./index.css";

function App(props) {
  const [thisPage, setThisPage] = useState(2);
  return (
    <footer className="f_doWrap">
      <div className="f_wrap">
        <div>
          <img src={logo} alt="logo" />
          <div className="f_Seti">
            <h6>Приєднуйтесь:</h6>
            <div>
              <img src={facebook} />
              <img src={insta} />
            </div>
          </div>
          <div className="f_Seti">
            <h6>Допомога і консультація:</h6>
            <div>
              <img src={whatsup} />
              <img src={telegram} />
              <img src={viber} />
            </div>
          </div>
          <div className="f_card">
            <img src={visa} />
            <img src={mCard} />
          </div>
        </div>
        <div>
          <h4>Інформація</h4>
          <nav>
            <li onClick={() => props.setThisPage(1)}>Про нас</li>
            <li onClick={() => props.setThisPage(2)}>Оплата</li>
            <li onClick={() => props.setThisPage(3)}>Доставка та збірка</li>
            <li onClick={() => props.setThisPage(4)}>Відгуки</li>
            <li onClick={() => props.setThisPage(5)}>Блог</li>
            <li onClick={() => props.setThisPage(6)}>Контакти</li>
            <li>Мапа сайту</li>
          </nav>
        </div>
        <div>
          <h4>Категорії</h4>
          <nav>
            <li>Ліжка</li>
            <li>Матраци</li>
            <li>М'яки меблі</li>
            <li>Шафи</li>
            <li>Комоди</li>
            <li>Тумби</li>
            <li>Столи</li>
            <li>Стільці</li>
            <li>Меблеві стіни</li>
            <li>Кухні</li>
          </nav>
        </div>
        <div>
          <h4>Клієнтам</h4>
          <nav>
            <li>Акції</li>
            <li>Розпродаж</li>
            <li>Купити в кредит</li>
            <li>Обмін і повернення товару</li>
            <li>Часто задавані питання</li>
            <li>Умови покупки</li>
            <li>Політика конфіденційності</li>
          </nav>
        </div>
        <div className="f_lastDiv">
          <div className="f_lastDivWrap">
            <img src={callPhone} />
            <div>
              <p>
                +38 067 929-45-45
                <br /> +38 050 133-45-45
                <br /> +38 093 170-75-45 <br />
                <span style={{ color: "rgb(255, 188, 87)" }}>
                  Передзвоніть мені
                </span>
              </p>
            </div>
          </div>
          <div className="f_lastDivWrap">
            <img src={geoLocation} />
            <div>
              <p>м. Київ, провулок Ізяславський 52, поверх 2</p>
            </div>
          </div>
          <div className="f_lastDivWrap">
            <img src={calendar} />
            <div>
              <p>Працюємо щодня з 9:00 до 18:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="f_downLine"></div>
      <div className="f_downFotter">
        © KROVATO - Технології сну - 2022. Всі права захищені.
      </div>
    </footer>
  );
}

export default App;
