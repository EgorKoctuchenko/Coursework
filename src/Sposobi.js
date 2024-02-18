import React, { useState, useEffect } from "react";
import dostavka from "./img/preim 1.svg";
import korobka from "./img/preim 2.svg";
import navyshniki from "./img/preim 3.svg";
import znyzh from "./img/preim 4.svg";
import "./index.css";

function Sposobi() {
  return (
    <article className="o_Sposobi">
      <section>
        <img src={dostavka}></img>
        <h4>Безкоштовна доставка</h4>
      </section>
      <section>
        <img src={korobka}></img>
        <h4>Безкоштовна збірка</h4>
      </section>
      <section>
        <img src={navyshniki}></img>
        <h4>Післягарантійне обслуговування</h4>
      </section>
      <section>
        <img src={znyzh}></img>
        <h4>Знижки клієнтам</h4>
      </section>
    </article>
  );
}

export default Sposobi;
