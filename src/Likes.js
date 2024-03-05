import React, { useState, useEffect } from "react";
import YesAv from "./img/YesAv.svg";
import NoAv from "./img/NoAv.svg";
import korzina from "./img/korzina.svg";
import like from "./img/obrane.svg";
import like2 from "./img/obrane2.svg";
import korzina2 from "./img/Korzina2.svg";
import "./index.css";

function Likes(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
    <main className="like_wrap">
      <article className="like_menu">
        <div className="like_ObraneMenu">
          <h3>
            Ваше обране{" "}
            <span style={{ color: "rgb(255, 188, 87)" }}>
              {data.filter((item) => item.like === 1).length}
            </span>
          </h3>
          <div className="like_Exit" onClick={() => props.setLikese(false)}>
            X
          </div>
        </div>
        <div className="like_wrapTovars">
          {data
            .filter((item) => item.like === 1)
            .map((item) => (
              <div className="like_wrapTovar">
                <section key={item.id} className="like_thisTovar">
                  {item.imageUrl && (
                    <img
                      className="like_Img"
                      onClick={() => {
                        props.setLikese(false);
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
                      src={require("./Image_Storage/" +
                        item.imageUrl.replace("http://localhost:3001", ""))}
                    />
                  )}
                  <div>
                    <div
                      onClick={() => {
                        props.setLikese(false);
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
                      <p className="m_Price">
                        {item.price.toLocaleString()} грн.
                      </p>
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
                            onClick={() =>
                              handleIsKorzina(item.name, item.korzina)
                            }
                          ></img>
                        ) : (
                          <img className="m_Korz" src={korzina2}></img>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
        </div>
      </article>
    </main>
  );
}

export default Likes;
