import React, { useState, useEffect } from "react";
import whatsapp from "./img/whatsapp.svg";
import telegram from "./img/telegram.svg";
import viber from "./img/viber.svg";
import logo from "./img/logo-header.svg";
import catalog from "./img/menu-catalog.svg";
import catalogClose from "./img/close-catalog.svg";
import magnifyingGlass from "./img/magnifying-glass-svgrepo-com.svg";
import callIcon from "./img/icon-tel.svg";
import Obrane from "./img/obrane.svg";
import Korzina from "./img/korzina.svg";
import Akcii from "./img/akcii.svg";
import Credit from "./img/credit.svg";
import Sale from "./img/sale.svg";
import Krest from "./img/Krest.svg";
import "./index.css";

function Header(props) {
  const [isTels, setTels] = useState(false);
  const [isLang, setLang] = useState(false);

  const handleTels = () => {
    setTels((prevTels) => !prevTels);
  };
  const handleLang = () => {
    setLang((prevLang) => !prevLang);
  };

  const handleCateg = () => {
    props.setCateg((prevCat) => !prevCat);
  };

  return (
    <header>
      <div className="h_upp_head">
        <nav className="h_nav1">
          <li onClick={() => props.setThisPage(1)}>Про нас</li>
          <li onClick={() => props.setThisPage(2)}>Оплата</li>
          <li onClick={() => props.setThisPage(3)}>Доставка та збірка</li>
          <li onClick={() => props.setThisPage(4)}>Відгуки</li>
          <li onClick={() => props.setThisPage(5)}>Блог</li>
          <li onClick={() => props.setThisPage(6)}>Контакти</li>
        </nav>
        <nav className="h_nav2">
          <p>Допомога і консультація:</p>
          <img src={whatsapp} alt="WhatsApp" />
          <img src={telegram} alt="Telegram" />
          <img src={viber} alt="Viber" />
          <div>
            <h5>UA</h5>
            <svg
              onClick={handleLang}
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 5.646a.5.5 0 0 1 .708 0L8 9.793l3.646-3.647a.5.5 0 1 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          {isLang && (
            <div className="h_Lange">
              <div className="h_Lange_L">
                <h5>UA</h5>
                <h5>RU</h5>
              </div>
              <svg
                onClick={handleLang}
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.646 5.646a.5.5 0 0 1 .708 0L8 9.793l3.646-3.647a.5.5 0 1 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          )}
        </nav>
      </div>
      <div className="h_down_head">
        <img src={logo} alt="logo" />
        {props.Categ === false ? (
          <button onClick={handleCateg}>
            <img src={catalog} />
            Каталог
          </button>
        ) : (
          <button onClick={handleCateg}>
            <img src={catalogClose} />
            Каталог
          </button>
        )}

        <section></section>
        <div className="h_poshyk">
          <input type="search" placeholder="Пошук товарів" />
          <img src={magnifyingGlass} alt="Logo" />
        </div>
        <div className="h_tel">
          <img src={callIcon} alt="Telephone" />
          <div className="h_tel_info">
            <p>Щодня з 9:00 до 18:00</p>
            <h4>067 929-45-45</h4>
          </div>
          <svg
            onClick={handleTels}
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 5.646a.5.5 0 0 1 .708 0L8 9.793l3.646-3.647a.5.5 0 1 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        {isTels && (
          <div className="h_tel2">
            <img src={callIcon} alt="Telephone" />
            <div className="h_tel2_info">
              <p>Щодня з 9:00 до 18:00</p>
              <h4>067 929-45-45</h4>
              <h4>050 133-45-45</h4>
              <h4>093 170-75-45</h4>
              <h4 className="h_tel2_info_ZvonMe">Передзвоніть мені</h4>
            </div>
            <img
              className="h_exit"
              onClick={handleTels}
              src={Krest}
              alt="close"
            />
          </div>
        )}

        <div className="h_likes">
          <img src={Obrane} alt="Likes" />
          <img src={Korzina} alt="Basket" />
        </div>
      </div>
      <div className="h_bottom_head">
        <nav className="h_nav2_1">
          <li>
            <img src={Akcii} alt="Likes" />
            <h5>Акції</h5>
          </li>
          <li>
            <img src={Sale} alt="Likes" />
            <h5>Розпродаж</h5>
          </li>
          <li>
            <img src={Credit} alt="Likes" />
            <h5>Купити в кредит</h5>
          </li>
        </nav>
        <nav className="h_nav2_2">
          <li>Дитяча</li>
          <li>Кухня</li>
          <li>Ванна</li>
          <li>Спальня</li>
          <li>Передпокій</li>
          <li>Вітальня</li>
          <li>Офіс</li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
