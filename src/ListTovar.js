import React, { useState, useEffect } from "react";
import Filter from "./img/Filter.svg";
import Krest from "./img/Krest.svg";
import ArBt from "./img/ArBt.svg";
import YesAv from "./img/YesAv.svg";
import NoAv from "./img/NoAv.svg";
import korzina from "./img/korzina.svg";
import like from "./img/obrane.svg";
import like2 from "./img/obrane2.svg";
import "./index.css";

function ListTovar(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  // Получить текущие товары на странице

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                <div className="li_kateX" onClick={handlePrice}>
                  Ціна, грн
                  <img src={Krest} />
                </div>
                <div className="li_params li_open">
                  asd
                  <br />
                  <br />
                  <br />
                  <br />
                  asd
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
                <div className="li_params li_open">
                  asd
                  <br />
                  <br />
                  <br />
                  <br />
                  asd
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
                  asd
                  <br />
                  <br />
                  <br />
                  <br />
                  asd
                </div>
              </li>
            )}
            {isRozmir === false ? (
              <li>
                <div className="li_kateX" onClick={handleRozmir}>
                  Розміри
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
                <div className="li_kateX" onClick={handleRozmir}>
                  Розміри
                  <img src={Krest} />
                </div>
                <div className="li_params li_open">
                  asd
                  <br />
                  <br />
                  <br />
                  <br />
                  asd
                </div>
              </li>
            )}
          </ul>
        </aside>
        <article className="li_list">
          {data
            .filter((item) => item.type === props.typee)
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((item) => (
              <section key={item.id} className="m_thisTovar">
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
        </article>
      </div>
      <ul className="li_buttons">
        <button onClick={() => paginate(currentPage - 1)}>{" < "}</button>
        {data.length > itemsPerPage && (
          <>
            {Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
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
    </main>
  );
}

export default ListTovar;
