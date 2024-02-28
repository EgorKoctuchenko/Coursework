import React, { useState, useEffect } from "react";
import YesAv from "./img/YesAv.svg";
import NoAv from "./img/NoAv.svg";
import korzina from "./img/korzina.svg";
import like from "./img/obrane.svg";
import like2 from "./img/obrane2.svg";
import akcii1 from "./img/akcii1.png";
import akcii2 from "./img/akcii2.png";
import akcii3 from "./img/akcii3.png";
import blog1 from "./img/blog1.png";
import blog2 from "./img/blog2.png";
import blog3 from "./img/blog3.png";
import Sposobi from "./Sposobi";
import arrowUp from "./img/ArrowUp.svg";
import "./index.css";

function MainMenu(props) {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  //Оновлення даних
  useEffect(() => {
    fetchData();
  }, []);

  //Файли (завантаження)
  /*const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  */

  //Отримання даних з MySQl
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/data");

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const jsonData = await response.json();

      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Ошибка при запросе:", error.message);
    }
  };

  return (
    <main className="m_wrap">
      <article className="m_reklama"></article>
      <article className="m_hotKat">
        <h1>Популярні товари</h1>
        <div className="m_Tovar">
          {data.slice(0, 8).map((item) => (
            <section
              key={item.id}
              className="m_thisTovar"
              onClick={() => {
                props.setThisPage(8);
                props.handleInfoMassiv(
                  item.id,
                  item.price,
                  item.kolvo,
                  item.name,
                  item.photo,
                  item.virobnik,
                  item.type,
                  item.korzina,
                  item.like,
                  item.sizes,
                  item.availability
                );
              }}
            >
              {item.imageUrl && (
                <img
                  className="m_Img"
                  src={require("./Image_Storage/" +
                    item.imageUrl.replace("http://localhost:3001", ""))}
                />
              )}
              <p className="m_Rozmir">{item.sizes}</p>
              <h5 className="m_Name">{item.name}</h5>
              {item.availability === "В наявності" ? (
                <div className="m_Avab">
                  <img src={YesAv}></img>
                  <p className="m_Nayav">В наявності</p>
                </div>
              ) : (
                <div className="m_Avab">
                  <img src={NoAv}></img>
                  <p className="m_Nayav">Немає в наявності</p>
                </div>
              )}
              <div className="m_BottomLikes">
                <p className="m_Price">{item.price.toLocaleString()} грн.</p>
                <div>
                  {item.like === "0" ? (
                    <img className="m_Like" src={like2}></img>
                  ) : (
                    <img className="m_Like" src={like}></img>
                  )}
                  <img className="m_Korz" src={korzina}></img>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
      <article className="m_akcii">
        <div>
          <h1>Акції</h1>
          <div>
            <h5>Дивитись далі</h5>
            <img src={arrowUp}></img>
          </div>
        </div>
        <section>
          <img src={akcii1}></img>
          <img src={akcii2}></img>
          <img src={akcii3}></img>
        </section>
      </article>
      <article className="m_vidgyki"></article>
      <article className="m_blog">
        <div>
          <h1>Свіжі статті та останні новини</h1>
          <div>
            <h5 onClick={() => props.setThisPage(5)}>Читать блог</h5>
            <img src={arrowUp}></img>
          </div>
        </div>
        <div className="m_listBlog">
          <section className="m_thisBlog">
            <div>
              <img src={blog1}></img>
              <h3>Новий дизайн. Чи підійде вам новий стиль?</h3>
              <h5 onClick={() => props.setThisPage(101)}>
                Детальніше <img className="b_arrow" src={arrowUp}></img>
              </h5>
            </div>
          </section>
          <section className="m_thisBlog">
            <div>
              <img src={blog2}></img>
              <h3>Диван ваших мрій. Чи потрібен він вам?</h3>
              <h5 onClick={() => props.setThisPage(102)}>
                Детальніше <img className="b_arrow" src={arrowUp}></img>
              </h5>
            </div>
          </section>
          <section className="m_thisBlog">
            <div>
              <img src={blog3}></img>
              <h3>Естетика. Чи підійдуть вам додаткові елементи?</h3>
              <h5 onClick={() => props.setThisPage(103)}>
                Детальніше <img className="b_arrow" src={arrowUp}></img>
              </h5>
            </div>
          </section>
        </div>
      </article>
      <article className="m_KrovatoIs">
        <h1>KROVATO - коли потрібні якісні меблі за доступною ціною!</h1>
        <p>
          Якщо в пошуковий рядок браузера ввести запит: «Куплю ліжко, шафу,
          диван», система видасть сотні продавців, що спеціалізуються з продажу
          цього товару. Але далеко не всі магазини та сайти в інтернеті можуть
          запропонувати такий самий різноманітний асортимент, як наша компанія.
          Та й з нашими цінами конкурувати можуть мало хто. Адже товар ми
          отримуємо безпосередньо від виробників, не переплачуючи за послуги
          посередників. До того ж, продажі ми ведемо як онлайн, так і в салоні,
          при цьому ціна на асортимент онлайн та офлайн - однакова.
          <br />
          <br /> Ми співпрацюємо тільки з найкращими вітчизняними та зарубіжними
          фабриками та компаніями, які отримали визнання покупців та експертів
          меблевої справи. Для нас важливо, щоб товар, який ми продаємо,
          відповідав міжнародним стандартам якості, був із сертифікованих
          матеріалів – довговічних, красивих та екологічно чистих. Ми з
          особливою ретельністю відбираємо пропозиції для магазину, тому можемо
          поручитися за їхню якість і впевнено рекомендувати клієнтам. У нас ви
          легко знайдете меблеві серії в класичному та модерному стилі, лінійки
          для оформлення житла в дусі романтики або скандинавського лаконізму.
        </p>
      </article>
      <Sposobi></Sposobi>
    </main>
  );
}

export default MainMenu;
