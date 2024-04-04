import React, { useState, useEffect } from "react";
import Filter from "./img/Filter.svg";
import Krest from "./img/Krest.svg";
import ArBt from "./img/ArBt.svg";
import YesAv from "./img/YesAv.svg";
import NoAv from "./img/NoAv.svg";
import korzina from "./img/korzina.svg";
import korzina2 from "./img/Korzina2.svg";
import like from "./img/obrane.svg";
import like2 from "./img/obrane2.svg";
import "./index.css";

function ListTovar(props) {
  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState(Number.MAX_VALUE);
  const [maxPrice, setMaxPrice] = useState(0);
  const [avabStatus, setAvabStatus] = useState("В наявності");
  const [virobS, setVirobS] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleVirobn = (bufVirob) => {
    setVirobS(bufVirob);
    console.log("1" + bufVirob + "2");
  };

  const handleAvab = () => {
    if (avabStatus === "В наявності") {
      setAvabStatus("Немає в наявності");
    } else {
      setAvabStatus("В наявності");
    }
  };

  //Для виробників
  const extractUniqueVirobniks = () => {
    const virobniks = new Set(); // Используем Set для хранения уникальных значений

    data.forEach((item) => {
      if (item.type === props.typee) {
        // Проверяем, чтобы производитель был нужного типа
        virobniks.add(item.virobnik); // Добавляем производителя в Set
      }
    });

    return Array.from(virobniks); // Преобразуем Set в массив и возвращаем
  };

  const allVirobniks = extractUniqueVirobniks();

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

  //Отримання даних з MySQl
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/data");

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const jsonData = await response.json();

      console.log(jsonData);
      if (minPrice >= 99999 && maxPrice <= 1) {
        setData(jsonData);
      } else {
        setData(
          jsonData.filter(
            (item) =>
              item.type === props.typee &&
              item.price >= minPrice &&
              item.price <= maxPrice
          )
        );
      }
      // Найти минимальную цену из данных
      let min = Number.MAX_VALUE;
      let max = Number.MIN_VALUE;
      jsonData
        .filter((item) => item.type === props.typee)
        .forEach((item) => {
          if (item.price < min) {
            min = item.price;
          }
          if (item.price > max) {
            max = item.price;
          }
        });
      setMinPrice(min);
      setMaxPrice(max);
    } catch (error) {
      console.error("Ошибка при запросе:", error.message);
    }
  };

  const [isAv, setIsAv] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isVirob, setIsVirob] = useState(false);
  const [isRozmir, setIsRozmir] = useState(false);

  const handleAv = () => {
    setIsAv((prevAv) => !prevAv);
  };
  const handlePrice = () => {
    setIsPrice((prevPrice) => !prevPrice);
  };
  const handleVirob = () => {
    setIsVirob((prevVirob) => !prevVirob);
  };
  const handleRozmir = () => {
    setIsRozmir((prevRozmir) => !prevRozmir);
  };

  // Отримати дані (вірні дані)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredDataByMinPrice = data.filter(
    (item) => item.type === props.typee && item.price >= minPrice
  );
  const filteredData = data.filter((item) => item.type === props.typee);

  return (
    <main className="">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "}
        <span style={{ color: "rgb(255, 188, 87)" }}>{props.typee}</span>
      </section>
      <h1 className="li_h1">{props.typee}</h1>
      <div className="li_tovari">
        <aside className="li_aside">
          <div className="li_zag">
            <img src={Filter} />
            <h5>Фільтр пошуку</h5>
          </div>
          <ul className="li_asideList">
            {isPrice === false ? (
              <li>
                <div className="li_kateX" onClick={handlePrice}>
                  Ціна, грн
                  <img src={ArBt} />
                </div>
                <div className="li_params li_close">
                  Оберіть ціну
                  <br />
                  <br />
                  <br />
                  <br />
                  asd
                </div>
              </li>
            ) : (
              <li>
                <div className="li_kateX" onClick={handlePrice}>
                  Ціна, грн
                  <img src={Krest} />
                </div>
                <div className="li_params li_open">
                  Оберіть ціну
                  <div className="li_cenaNum">
                    <input
                      onChange={(e) => setMinPrice(parseInt(e.target.value))}
                      type="number"
                      placeholder={minPrice ? minPrice : 0}
                      value={minPrice}
                    ></input>
                    <input
                      onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                      type="number"
                      placeholder={maxPrice ? maxPrice : 0}
                      value={maxPrice}
                    ></input>
                  </div>
                </div>
              </li>
            )}
            {isAv === false ? (
              <li>
                <div className="li_kateX" onClick={handleAv}>
                  Наявність
                  <img src={ArBt} />
                </div>
                <div className="li_params li_close">
                  asd
                  <br />
                  <br />
                  <br />
                  <br />
                  asd
                </div>
              </li>
            ) : (
              <li>
                <div className="li_kateX" onClick={handleAv}>
                  Наявність
                  <img src={Krest} />
                </div>
                <div className="li_open li_fixinga">
                  Немає у наявності{" "}
                  <input onChange={(e) => handleAvab()} type="checkbox"></input>
                </div>
              </li>
            )}
            {isVirob === false ? (
              <li>
                <div className="li_kateX" onClick={handleVirob}>
                  Виробник
                  <img src={ArBt} />
                </div>
                <div className="li_params li_close">
                  asd
                  <br />
                  <br />
                  <br />
                  <br />
                  asd
                </div>
              </li>
            ) : (
              <li>
                <div className="li_kateX" onClick={handleVirob}>
                  Виробник
                  <img src={Krest} />
                </div>
                <div className="li_params li_open">
                  Оберіть виробника
                  <div className="li_forVirob">
                    {allVirobniks.map((virobnik, index) => (
                      <div onClick={() => handleVirobn(virobnik)} key={index}>
                        {virobnik}
                      </div>
                    ))}
                    <div onClick={() => handleVirobn("")}>Очистити</div>
                  </div>
                </div>
              </li>
            )}
          </ul>
          <button onClick={() => fetchData()} className="li_but">
            Фільтрувати
          </button>
        </aside>
        <article className="li_list">
          {data
            .filter((item) => item.type === props.typee)
            .filter((item) => item.price >= minPrice)
            .filter((item) => item.price <= maxPrice)
            .filter((item) => item.availability === avabStatus)
            .filter((item) => (virobS ? item.virobnik === virobS : true))
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((item) => (
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
                </section>
              </div>
            ))}
        </article>
      </div>
      {filteredData.length >= 13 ? (
        <ul className="li_buttons">
          <button onClick={() => paginate(currentPage - 1)}>{" < "}</button>
          {filteredData.length > itemsPerPage && (
            <>
              {Array.from(
                { length: Math.ceil(filteredData.length / itemsPerPage) },
                (_, i) => (
                  <button key={i} onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                )
              )}
              <button onClick={() => paginate(currentPage + 1)}>{">"}</button>
            </>
          )}
        </ul>
      ) : (
        <div></div>
      )}
    </main>
  );
}

export default ListTovar;
