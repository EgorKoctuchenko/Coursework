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
import rek1 from "./img/reklama1.png";
import rek2 from "./img/reklama2.png";
import rek3 from "./img/reklama3.png";
import rek4 from "./img/reklama4.png";
import rek5 from "./img/reklama5.png";
import arLeft from "./img/ArLefr2.svg";
import arRight from "./img/ArRight.svg";
import UserPh from "./img/userPhoto.svg";
import StarFill from "./img/StarFill.svg";
import korzina2 from "./img/Korzina2.svg";
import StarNoFill from "./img/StarNoFill.svg";
import "./index.css";

function MainMenu(props) {
  const [Coef, setCoef] = useState(0);
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCoef = (method) => {
    if (method === 1) {
      setCoef((prevCoef) => {
        const newCoef = prevCoef + 1;
        return newCoef === 5 ? 0 : newCoef;
      });
    } else {
      setCoef((prevCoef) => {
        const newCoef = prevCoef - 1;
        return newCoef === -1 ? 4 : newCoef;
      });
    }
  };

  //Для лайков
  const handleIsLike = async (name, currentLike) => {
    console.log("asdasd = " + name);
    try {
      const response = await fetch("http://localhost:3001/api/renameData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          newLike: currentLike === 0 ? 1 : 0,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      console.log("Данные успешно переименованы в базе данных");
      fetchData();
      // Добавьте здесь логику для обновления данных на клиенте, если это необходимо
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error.message);
    }
  };
  //Для корзині
  const handleIsKorzina = async (name, currentKorz) => {
    console.log("asdasd = " + name);
    try {
      const response = await fetch("http://localhost:3001/api/renameKorzina", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          newKorzina: currentKorz === 0 ? 1 : 0,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      console.log("Данные успешно переименованы в базе данных");
      fetchData();
      // Добавьте здесь логику для обновления данных на клиенте, если это необходимо
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error.message);
    }
  };

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

  const fetchData2 = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/vidg");

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const jsonVidg = await response.json();

      console.log(jsonVidg);
      setVidg(jsonVidg);
    } catch (error) {
      console.error("Ошибка при запросе:", error.message);
    }
  };
  const [vidg, setVidg] = useState([]);
  useEffect(() => {
    fetchData2();
  }, []);

  return (
    <main className="m_wrap">
      <article className="m_reklama">
        <img
          className="m_Lefty"
          src={arLeft}
          onClick={() => handleCoef(0)}
        ></img>
        <img
          className="m_Reklama2"
          style={{
            transform: `translateX(${Coef * -1290}px)`,
            transition: "transform 0.4s ease-in-out",
          }}
          src={rek1}
        ></img>
        <img
          className="m_Reklama2"
          style={{
            transform: `translateX(${Coef * -1290}px)`,
            transition: "transform 0.4s ease-in-out",
          }}
          src={rek2}
        ></img>
        <img
          className="m_Reklama2"
          style={{
            transform: `translateX(${Coef * -1290}px)`,
            transition: "transform 0.4s ease-in-out",
          }}
          src={rek3}
        ></img>
        <img
          className="m_Reklama2"
          style={{
            transform: `translateX(${Coef * -1290}px)`,
            transition: "transform 0.4s ease-in-out",
          }}
          src={rek4}
        ></img>
        <img
          className="m_Reklama2"
          style={{
            transform: `translateX(${Coef * -1290}px)`,
            transition: "transform 0.4s ease-in-out",
          }}
          src={rek5}
        ></img>
        <img
          className="m_Righty"
          src={arRight}
          onClick={() => handleCoef(1)}
        ></img>
        <ul className="m_elipse">
          <li>
            <div
              style={{
                backgroundColor: Coef === 0 ? `rgb(255, 188, 87)` : "white",
              }}
            ></div>
          </li>
          <li>
            <div
              style={{
                backgroundColor: Coef === 1 ? `rgb(255, 188, 87)` : "white",
              }}
            ></div>
          </li>
          <li>
            <div
              style={{
                backgroundColor: Coef === 2 ? `rgb(255, 188, 87)` : "white",
              }}
            ></div>
          </li>
          <li>
            <div
              style={{
                backgroundColor: Coef === 3 ? `rgb(255, 188, 87)` : "white",
              }}
            ></div>
          </li>
          <li>
            <div
              style={{
                backgroundColor: Coef === 4 ? `rgb(255, 188, 87)` : "white",
              }}
            ></div>
          </li>
        </ul>
      </article>
      <article className="m_hotKat">
        <h1>Популярні товари</h1>
        <div className="m_Tovar">
          {data.slice(0, 8).map((item) => (
            <div className="li_wrapTovar">
              <section key={item.id} className="m_thisTovar">
                <div
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
                  <p className="m_Rozmir">Розміри: {item.sizes}</p>
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
                </div>
                <div className="li_linee"></div>
                <div className="m_BottomLikes">
                  <p className="m_Price">{item.price.toLocaleString()} грн.</p>
                  <div>
                    {item.like === 0 ? (
                      <img
                        className="m_Like"
                        src={like}
                        onClick={() => handleIsLike(item.name, item.like)}
                      ></img>
                    ) : (
                      <img
                        className="m_Like"
                        src={like2}
                        onClick={() => handleIsLike(item.name, item.like)}
                      ></img>
                    )}
                    {item.korzina === 0 ? (
                      <img
                        className="m_Korz"
                        src={korzina}
                        onClick={() => handleIsKorzina(item.name, item.korzina)}
                      ></img>
                    ) : (
                      <img className="m_Korz" src={korzina2}></img>
                    )}
                  </div>
                </div>
              </section>
            </div>
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
      <div className="m_conteinerH">
        <h1 className="m_h1Vid">Відгуки</h1>
        <div className="m_daliVid" onClick={() => props.setThisPage(4)}>
          <h5>Дивитись усі</h5>
          <img src={arrowUp}></img>
        </div>
      </div>
      <article className="m_vidgyki">
        {vidg.slice(0, 9).map((item) => (
          <section key={item.id} className="v_thisComment">
            <div className="v_up">
              <div className="v_up_left">
                <img src={UserPh} />
                <h6>{item.fio}</h6>
              </div>
              <div className="v_up_right">
                <div className="v_up_right_grade">
                  {Array.from({ length: item.grade }, (_, i) => (
                    <img key={i} src={StarFill} />
                  ))}
                  {Array.from({ length: 5 - item.grade }, (_, i) => (
                    <img key={i} src={StarNoFill} />
                  ))}
                </div>
                <h6>{item.datakom.slice(0, 10)}</h6>
              </div>
            </div>
            <p className="v_middle">{item.komment}</p>
          </section>
        ))}
      </article>
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
