import React, { useState, useEffect } from "react";

import "./index.css";

function BD(props) {
  const [data, setData] = useState([]);
  const [vidg, setVidg] = useState([]);
  const [zamov, setZam] = useState([]);
  const [minPrice, setMinPrice] = useState(Number.MAX_VALUE);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedItem, setSelectedItem] = useState("Товари");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
  }, []);

  //Видалити
  const handleDelete = (id) => {
    fetch("http://localhost:3001/api/deleteData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка удаления данных");
        }
        console.log("Данные успешно удалены");
        // Дополнительная логика при успешном удалении данных, если нужно
        alert("Данные удалены");
        fetchData3();
      })
      .catch((error) => {
        console.error("Ошибка удаления данных:", error);
        // Обработка ошибок, если нужно
      });
  };
  //Отримання даних
  const fetchData3 = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/Zamov");

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const jsonData = await response.json();
      setZam(jsonData);
    } catch (error) {
      console.error("Ошибка при запросе:", error.message);
    }
  };
  //
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
  //
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/data");

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const jsonData = await response.json();

      console.log(jsonData);
      /*
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
      */
      setData(jsonData);
    } catch (error) {
      console.error("Ошибка при запросе:", error.message);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [avabStatus, setAvabStatus] = useState("В наявності");
  const [virobS, setVirobS] = useState("");

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredDataByMinPrice = data.filter(
    (item) => item.type === props.typee && item.price >= minPrice
  );
  const filteredData = data.filter((item) => item.type === props.typee);

  return (
    <main className="o_wrap">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "}
        <span style={{ color: "rgb(255, 188, 87)" }}>Адмін-Панель</span>
      </section>
      <div className="bd_wrapBut" aria-labelledby="dropdownMenuButton">
        <button className="bd_but" onClick={() => handleItemClick("Товари")}>
          Товари
        </button>
        <button className="bd_but" onClick={() => handleItemClick("Коментарі")}>
          Коментарі
        </button>
        <button
          className="bd_but"
          onClick={() => handleItemClick("Замовлення")}
        >
          Замовлення
        </button>
      </div>
      <article className="bd_kont">
        {selectedItem === "Товари" ? (
          <div>
            <ul className="bd_tovarInfo">
              <li>ID</li>
              <li>Ціна</li>
              <li>Кількість</li>
              <li>Назва</li>
              <li>Фото</li>
              <li>Виробник</li>
              <li>Тип</li>
              <li>Розміри</li>
              <li>Наявність</li>
            </ul>
            {data
              //.filter((item) => item.type === props.typee)
              //.filter((item) => item.price >= minPrice)
              //.filter((item) => item.availability === avabStatus)
              //.filter((item) => (virobS ? item.virobnik === virobS : true))
              .map((item) => (
                <div className="bd_wrawpo">
                  <section key={item.id} className="bd_tovar">
                    <li>{item.id}</li>
                    <li>{item.price}</li>
                    <li>{item.kolvo}</li>
                    <li>{item.name}</li>
                    <li>{item.photo}</li>
                    <li>{item.virobnik}</li>
                    <li>{item.type}</li>
                    <li>{item.sizes}</li>
                    <li>{item.availability}</li>
                  </section>
                  <div className="bd_close">X</div>
                </div>
              ))}
          </div>
        ) : (
          <div></div>
        )}
        {selectedItem === "Коментарі" ? (
          <div>
            <ul className="bd_tovarInfo">
              <li>ID</li>
              <li>ПІБ</li>
              <li>Дата коменнтування</li>
              <li>Коментар</li>
              <li>Оцінка</li>
              <li>Тип відгуку</li>
            </ul>
            {vidg
              //.filter((item) => item.type === props.typee)
              //.filter((item) => item.price >= minPrice)
              //.filter((item) => item.availability === avabStatus)
              //.filter((item) => (virobS ? item.virobnik === virobS : true))
              .map((item) => (
                <div className="bd_wrawpo">
                  <section key={item.id} className="bd_tovar">
                    <li>{item.idvid}</li>
                    <li>{item.fio}</li>
                    <li>{item.datakom.slice(0, 10)}</li>
                    <li>{item.komment}</li>
                    <li>{item.grade}</li>
                    <li>{item.vidg_type}</li>
                  </section>
                  <div className="bd_close">X</div>
                </div>
              ))}
          </div>
        ) : (
          <div></div>
        )}
        {selectedItem === "Замовлення" ? (
          <div>
            <ul className="bd_tovarInfo">
              <li>ID</li>
              <li>ПІБ</li>
              <li>E-mail</li>
              <li>Телефон</li>
              <li>Доставка</li>
              <li>Способ оплати</li>
              <li>Комент</li>
              <li>Товар</li>
              <li>Інша людина</li>
              <li>Ціна</li>
            </ul>
            {zamov
              //.filter((item) => item.type === props.typee)
              //.filter((item) => item.price >= minPrice)
              //.filter((item) => item.availability === avabStatus)
              //.filter((item) => (virobS ? item.virobnik === virobS : true))
              .map((item) => (
                <div className="bd_wrawpo">
                  <section key={item.id} className="bd_tovar">
                    <li>{item.id_zamov}</li>
                    <input type="text" value={item.fio} />
                    <li>{item.email}</li>
                    <li>{item.tel}</li>
                    <li>{item.dostavka}</li>
                    <li>{item.sposobOplata}</li>
                    <li>{item.comment}</li>
                    <li>{item.tovar}</li>
                    <li>{item.inshaLudina}</li>
                    <li>{item.price}</li>
                  </section>
                  <div
                    onClick={() => handleDelete(item.id_zamov)}
                    className="bd_close"
                  >
                    X
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div></div>
        )}
      </article>
    </main>
  );
}

export default BD;
