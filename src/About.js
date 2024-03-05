import React, { useState, useEffect } from "react";
import galochka from "./img/Galochka3.svg";
import mobAbout from "./img/mob-about 1.png";
import mobAbout2 from "./img/mob-about 2.png";
import Sposobi from "./Sposobi";
import "./index.css";

function About(props) {
  return (
    <main className="about_wrap">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "}
        <span style={{ color: "rgb(255, 188, 87)" }}>Про нас</span>
      </section>
      <article className="a_AboutUs">
        <div>
          <h1>Про нас</h1>
          <h3>
            Магазин меблів для дому Krovato є дистриб'ютором високоякісних
            меблів.
          </h3>
          <h4>
            Ми працюємо тільки з провідними виробниками ліжок та матраців,
            такими як ЕММ, Estella, Метакам, Legko, HighFoam, ArborDrev.
          </h4>
        </div>
        <img src={mobAbout}></img>
      </article>
      <article className="a_KROVATO">
        <h1>KROVATO це</h1>
        <div>
          <section>
            <img src={galochka}></img>
            <h3>Власне виробництво</h3>
            <p>
              Також у нас є своє виробництво, завдяки чому ми можемо виготовити
              меблі безпосередньо за Вашими побажаннями: нестандартний розмір,
              висота, виготовлення меблів за Вашим ескізом. Ліжка, тумби,
              комоди, шафи - все це ми можемо доопрацювати за Вашим бажанням.
            </p>
          </section>
          <section>
            <img src={galochka}></img>
            <h3>Професіонали</h3>
            <p>
              Наші вироби виготовлені на професійному обладнанні з ясена,
              вільхи, бука, дуба, металу та ДСП. Фабрики із закритим циклом
              виробництва – контроль якості кожному етапі: від завезення дерева
              в цех до складання ліжка в клієнта.
            </p>
          </section>
          <section>
            <img src={galochka}></img>
            <h3>Великий вибір</h3>
            <p>
              На нашому сайті Ви легко зможете підібрати собі спальню, вітальню
              або дитячу кімнату "під ключ". Величезний вибір матраців, ліжок, а
              також тумбочок та комодів чекають на Вас.
            </p>
          </section>
          <section>
            <img src={galochka}></img>
            <h3>Контроль якості</h3>
            <p>
              Наші досвідчені менеджери, з радістю допоможуть підібрати Вам
              меблі, які Вас радуватимуть довгі роки. Завдяки власній службі
              доставки та збирання, ми підтримуємо контроль якості від
              виробництва до клієнта.
            </p>
          </section>
        </div>
      </article>
      <article className="a_showRoom">
        <div>
          <h1>Запрошуємо Вас відвідати наш Шоу-рум</h1>
          <h3>
            Наші фахівці допоможуть Вам підібрати матеріали і комплектуючі з
            урахуванням Ваших побажань.
          </h3>
          <h4>
            У нас є виставка, на якій Ви можете побачити найпопулярніші моделі
            ліжок та тумбочок, а також полежати на різних моделях матраців та
            підібрати собі оптимальний матрац для комфортного сну.
            <br />
            <br />
            Адреса виставки, а також карту проїзду можна побачити в розділі
            "Контакти".
          </h4>
        </div>
        <img src={mobAbout2}></img>
      </article>
      <Sposobi></Sposobi>
    </main>
  );
}

export default About;
