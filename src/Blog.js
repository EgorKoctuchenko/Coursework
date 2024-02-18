import React, { useState, useEffect } from "react";
import blog1 from "./img/blog1.png";
import blog2 from "./img/blog2.png";
import blog3 from "./img/blog3.png";
import blog4 from "./img/blog4.png";
import blog5 from "./img/blog5.png";
import blog6 from "./img/blog6.png";
import Sposobi from "./Sposobi";
import arrow from "./img/ArrowUp.svg";
import "./index.css";

function Blog() {
  return (
    <main>
      <section className="this_choice">
        Головна {" › "} <span style={{ color: "rgb(255, 188, 87)" }}>Блог</span>
      </section>
      <h1 className="b_h1">Блог</h1>
      <article className="b_wrap">
        <section>
          <img src={blog1}></img>
          <h3>Новий дизайн. Чи підійде вам новий стиль?</h3>
          <h5>
            Детальніше <img className="b_arrow" src={arrow}></img>
          </h5>
        </section>
        <section>
          <img src={blog2}></img>
          <h3>Диван ваших мрій. Чи потрібен він вам?</h3>
          <h5>
            Детальніше <img className="b_arrow" src={arrow}></img>
          </h5>
        </section>
        <section>
          <img src={blog3}></img>
          <h3>Естетика. Чи підійде вам додаткові елементи?</h3>
          <h5>
            Детальніше <img className="b_arrow" src={arrow}></img>
          </h5>
        </section>
        <section>
          <img src={blog4}></img>
          <h3>Стільці для вітальні. Як правильно вибрати?</h3>
          <h5>
            Детальніше <img className="b_arrow" src={arrow}></img>
          </h5>
        </section>
        <section>
          <img src={blog5}></img>
          <h3>Що краще вибрати для кухні – стільці чи кухонний куточок?</h3>
          <h5>
            Детальніше <img className="b_arrow" src={arrow}></img>
          </h5>
        </section>
        <section>
          <img src={blog6}></img>
          <h3>Оформлення вітальні. Які м'які меблі краще вибрати?</h3>
          <h5>
            Детальніше <img className="b_arrow" src={arrow}></img>
          </h5>
        </section>
      </article>
      <Sposobi></Sposobi>
    </main>
  );
}

export default Blog;
