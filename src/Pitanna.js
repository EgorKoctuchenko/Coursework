import React, { useState, useEffect } from "react";
import vopros from "./img/vopros.svg";
import "./index.css";

function Pitanna() {
  return (
    <article className="o_pitana">
      <h1>У вас все ще залишилися питання?</h1>
      <section>
        <div>
          <img src={vopros}></img>
          <h5>Як повернути або обміняти замовлення</h5>
        </div>
        <svg
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
      </section>
      <section>
        <div>
          <img src={vopros}></img>
          <h5>Чи можна повернути/обміняти товар, якщо втрачено чек?</h5>
        </div>
        <svg
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
      </section>
      <section>
        <div>
          <img src={vopros}></img>
          <h5>В який термін будуть повернуті гроші?</h5>
        </div>
        <svg
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
      </section>
      <section>
        <div>
          <img src={vopros}></img>
          <h5>Чи можна повернути кошти на іншу карту?</h5>
        </div>
        <svg
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
      </section>
    </article>
  );
}

export default Pitanna;
