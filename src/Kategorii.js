import React, { useState, useEffect } from "react";
import lizhka from "./img/lizhka.svg";
import matrac from "./img/matrac.svg";
import komod from "./img/komod.svg";
import mm from "./img/mm.svg";
import stilci from "./img/stilci.svg";
import "./index.css";

function Kategorii(props) {
  return (
    <main className="kat_wrap">
      <ul className="kat_menu">
        <li
          onClick={() => {
            props.setTypee("Ліжко");
            props.setThisPage(7);
          }}
        >
          <img src={lizhka} />
          <h4>Ліжка</h4>
        </li>
        <li
          onClick={() => {
            props.setTypee("Матрац");
            props.setThisPage(7);
          }}
        >
          <img src={matrac} />
          <h4>Матраци</h4>
        </li>
        <li
          onClick={() => {
            props.setTypee("Комод");
            props.setThisPage(7);
          }}
        >
          <img src={komod} />
          <h4>Комоди</h4>
        </li>
        <li
          onClick={() => {
            props.setTypee("М'які меблі");
            props.setThisPage(7);
          }}
        >
          <img src={mm} />
          <h4>М'яки меблі</h4>
        </li>
        <li
          onClick={() => {
            props.setTypee("Стільці");
            props.setThisPage(7);
          }}
        >
          <img src={stilci} />
          <h4>Стільці</h4>
        </li>
      </ul>
    </main>
  );
}

export default Kategorii;
