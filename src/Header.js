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
import burgerMenu from "./img/BurgerMenu.svg";
import "./index.css";

function Header(props) {
  const handleCateg = () => {
    props.setCateg((prevCat) => !prevCat);
  };

  return (
    <header>
      <div className="h_upp_head">
        {!props.isSmallScreen ? (
          <nav className="h_nav1">
            <li onClick={() => props.setThisPage(1)}>Про нас</li>
            <li onClick={() => props.setThisPage(2)}>Оплата</li>
            <li onClick={() => props.setThisPage(3)}>Доставка та збірка</li>
            <li onClick={() => props.setThisPage(4)}>Відгуки</li>
            <li onClick={() => props.setThisPage(5)}>Блог</li>
            <li onClick={() => props.setThisPage(6)}>Контакти</li>
          </nav>
        ) : (
          <nav className="h_nav1">
            <img src={burgerMenu} alt="Viber" />
          </nav>
        )}
        <nav className="h_nav2">
          <p>Допомога і консультація:</p>
          <img src={whatsapp} alt="WhatsApp" />
          <img src={telegram} alt="Telegram" />
          <img src={viber} alt="Viber" />
          <div>
            <h5>UA</h5>
          </div>
        </nav>
      </div>
      <div className="h_down_head">
        <img className="h_logotip" src={logo} alt="logo" />
        {props.Categ === false ? (
          <button onClick={handleCateg} className="h_katalog">
            <img src={catalog} />
            Каталог
          </button>
        ) : (
          <button onClick={handleCateg} className="h_katalog">
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
        </div>

        <div className="h_likes">
          <img onClick={() => props.setLikese(true)} src={Obrane} alt="Likes" />
          <img
            src={Korzina}
            alt="Basket"
            onClick={() => props.setThisPage(9)}
          />
        </div>
      </div>
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
    </header>
  );
}

export default Header;
