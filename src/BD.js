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
  //Замовлення
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
  //Відгук
  const handleDelete2 = (id) => {
    fetch("http://localhost:3001/api/deleteVidg", {
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
        fetchData2();
      })
      .catch((error) => {
        console.error("Ошибка удаления данных:", error);
        // Обработка ошибок, если нужно
      });
  };
  //Товари
  const handleDelete3 = (id) => {
    fetch("http://localhost:3001/api/deleteTovar", {
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
        fetchData();
      })
      .catch((error) => {
        console.error("Ошибка удаления данных:", error);
        // Обработка ошибок, если нужно
      });
  };
  //
  //Отримання даних
  //
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
      const response = await fetch("http://localhost:3001/api/data2");

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
            (item) => item.price >= minPrice && item.price <= maxPrice
          )
        );
      }
      // Найти минимальную цену из данных
      let min = Number.MAX_VALUE;
      let max = Number.MIN_VALUE;
      jsonData.forEach((item) => {
        if (item.price < min) {
          min = item.price;
        }
        if (item.price > max) {
          max = item.price;
        }
      });
      setMinPrice(min);
      setMaxPrice(max);
      console.log(minPrice);
      console.log(maxPrice);

      setData(jsonData);
    } catch (error) {
      console.error("Ошибка при запросе:", error.message);
    }
  };
  //
  //Заміна
  //
  //Замовлення
  const handleInputChangeNow = (id_zamov, newData) => {
    fetch("http://localhost:3001/api/updateZam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_zamov, ...newData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка обновления данных");
        }
        console.log("Данные успешно обновлены");
        fetchData3();
        // Дополнительная логика при успешном обновлении данных, если нужно
      })
      .catch((error) => {
        console.error("Ошибка обновления данных:", error);
        // Обработка ошибок, если нужно
      });
  };
  const handleInputChange = (e, id_zamov, field) => {
    const value = e.target.value;
    const updatedData = zamov.map((item) => {
      if (item.id_zamov === id_zamov) {
        return { ...item, [field]: value };
      }
      return item;
    });

    // Отправить обновленные данные на сервер
    handleInputChangeNow(
      id_zamov,
      updatedData.find((item) => item.id_zamov === id_zamov)
    );
  };
  //Товар
  const handleInputChangeNow2 = (id_tovar, newData) => {
    fetch("http://localhost:3001/api/updateTov", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_tovar, ...newData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка обновления данных");
        }
        console.log("Данные успешно обновлены");
        fetchData();
        // Дополнительная логика при успешном обновлении данных, если нужно
      })
      .catch((error) => {
        console.error("Ошибка обновления данных:", error);
        // Обработка ошибок, если нужно
      });
  };
  const handleInputChange2 = (e, id_tovar, field) => {
    const value = e.target.value;
    const updatedData = data.map((item) => {
      if (item.id_tovar === id_tovar) {
        return { ...item, [field]: value };
      }
      return item;
    });

    // Отправить обновленные данные на сервер
    handleInputChangeNow2(
      id_tovar,
      updatedData.find((item) => item.id_tovar === id_tovar)
    );
  };
  //Відгук
  const handleInputChangeNow3 = (idvid, newData) => {
    // Конвертируем дату в формат 'гггг-мм-дд'
    const convertedDatakom = new Date(newData.datakom)
      .toISOString()
      .slice(0, 10);

    // Обновляем данные с конвертированной датой
    const updatedData = { ...newData, datakom: convertedDatakom };

    fetch("http://localhost:3001/api/updateKom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idvid, ...updatedData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка обновления данных");
        }
        console.log("Данные успешно обновлены");
        fetchData2();
        // Дополнительная логика при успешном обновлении данных, если нужно
      })
      .catch((error) => {
        console.error("Ошибка обновления данных:", error);
        // Обработка ошибок, если нужно
      });
  };
  const handleInputChange3 = (e, idvid, field) => {
    const value = e.target.value;
    const updatedData = vidg.map((item) => {
      if (item.idvid === idvid) {
        return { ...item, [field]: value };
      }
      return item;
    });

    // Отправить обновленные данные на сервер
    handleInputChangeNow3(
      idvid,
      updatedData.find((item) => item.idvid === idvid)
    );
  };
  //
  //ДОДАВАННЯ ДАНИХ (ТУТ, ЛИШЕ ДЛЯ ТОВАРІВ)
  //
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const handleAddData = () => {
    const formData = new FormData();
    formData.append("id_tovar", 123); //document.querySelector("#id_tovar").value);
    formData.append("price", document.querySelector("#price").value);
    formData.append("kolvo", document.querySelector("#kolvo").value);
    formData.append("name", document.querySelector("#name").value);
    formData.append("photo", selectedImage);
    formData.append("virobnik", document.querySelector("#virobnik").value);
    formData.append("type", document.querySelector("#type").value);
    formData.append("sizes", document.querySelector("#sizes").value);
    formData.append(
      "availability",
      document.querySelector("#availability").value
    );

    fetch("http://localhost:3001/api/addData", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка добавления данных");
        }
        console.log("Данные успешно добавлены на сервер");
        // Дополнительная логика при успешном добавлении данных, если нужно
      })
      .catch((error) => {
        console.error("Ошибка добавления данных:", error);
        // Обработка ошибок, если нужно
      });
  };
  //
  //
  //
  //
  const [virobS, setVirobS] = useState("");
  const [typeS, setTypeS] = useState("");
  const [poiskName, setPoiskName] = useState("");
  //
  const [grade, setGrade] = useState(0);
  const [typeV, setTypeV] = useState("");

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
        <button
          style={
            selectedItem === "Товари"
              ? {}
              : { backgroundColor: "rgb(241, 198, 132)" }
          }
          className="bd_but"
          onClick={() => handleItemClick("Товари")}
        >
          Товари
        </button>
        <button
          style={
            selectedItem === "Коментарі"
              ? {}
              : { backgroundColor: "rgb(241, 198, 132)" }
          }
          className="bd_but"
          onClick={() => handleItemClick("Коментарі")}
        >
          Коментарі
        </button>
        <button
          style={
            selectedItem === "Замовлення"
              ? {}
              : { backgroundColor: "rgb(241, 198, 132)" }
          }
          className="bd_but"
          onClick={() => handleItemClick("Замовлення")}
        >
          Замовлення
        </button>
      </div>
      {selectedItem === "Товари" ? (
        <section>
          <div className="bd_filterWrap">
            <div>
              <h1 className="bd_filterH1">Фільтрація за мін. ціною:</h1>
              <input
                className="bd_filterPo"
                onChange={(e) => setMinPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <h1 className="bd_filterH1">Фільтрація за макс. ціною:</h1>
              <input
                className="bd_filterPo"
                onChange={(e) => setMaxPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <h1 className="bd_filterH1">Пошук за назвою:</h1>
              <input
                className="bd_filterPo"
                onChange={(e) => setPoiskName(e.target.value)}
              ></input>
            </div>
          </div>
          <h1 className="bd_filterH1">Фільтрація за "типом"</h1>
          <ul className="bd_types">
            <li onClick={() => setTypeS("Ліжко")}>Ліжко</li>
            <li onClick={() => setTypeS("Комод")}>Комод</li>
            <li onClick={() => setTypeS("Стільці")}>Стільці</li>
            <li onClick={() => setTypeS("М'які меблі")}>М'які меблі</li>
            <li onClick={() => setTypeS("Матрац")}>Матрац</li>
            <li onClick={() => setTypeS("")}>Очистити</li>
          </ul>
          <h1 className="bd_filterH1">Фільтрація за "виробником"</h1>
          <ul className="bd_types">
            <li onClick={() => setVirobS("SportY")}>SportY</li>
            <li onClick={() => setVirobS("LLH")}>LLH</li>
            <li onClick={() => setVirobS("Vindal")}>Vindal</li>
            <li onClick={() => setVirobS("Batiscef")}>Batiscef</li>
            <li onClick={() => setVirobS("PosiPasi")}>PosiPasi</li>
            <li onClick={() => setVirobS("BlueMind")}>BlueMind</li>
            <li onClick={() => setVirobS("Many")}>Many</li>
            <li onClick={() => setVirobS("Sonir")}>Sonir</li>
            <li onClick={() => setVirobS("ABC")}>ABC</li>
            <li onClick={() => setVirobS("HolySleep")}>HolySleep</li>
            <li onClick={() => setVirobS("TokeBoke")}>TokeBoke</li>
            <li onClick={() => setVirobS("")}>Очистити</li>
          </ul>
        </section>
      ) : (
        <div></div>
      )}
      {selectedItem === "Коментарі" ? (
        <section>
          <h1 className="bd_filterH1">Фільтрація за "оцінкою"</h1>
          <ul className="bd_types">
            <li onClick={() => setGrade(5)}>5</li>
            <li onClick={() => setGrade(4)}>4</li>
            <li onClick={() => setGrade(3)}>3</li>
            <li onClick={() => setGrade(2)}>2</li>
            <li onClick={() => setGrade(1)}>1</li>
            <li onClick={() => setGrade(0)}>Очистити</li>
          </ul>
          <h1 className="bd_filterH1">Фільтрація за "типом коментаря"</h1>
          <ul className="bd_types">
            <li onClick={() => setTypeV("shop")}>Магазин</li>
            <li onClick={() => setTypeV("tovar")}>Товар</li>
            <li onClick={() => setTypeV("")}>Очистити</li>
          </ul>
        </section>
      ) : (
        <div></div>
      )}
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
              .filter((item) => item.price >= minPrice)
              .filter((item) =>
                poiskName ? item.name.includes(poiskName) : true
              )
              .filter((item) => (virobS ? item.virobnik === virobS : true))
              .filter((item) => (typeS ? item.type === typeS : true))
              .map((item) => (
                <div className="bd_wrawpo">
                  <section key={item.id} className="bd_tovar">
                    <li>{item.id_tovar}</li>
                    <input
                      onChange={(e) =>
                        handleInputChange2(e, item.id_tovar, "price")
                      }
                      type="number"
                      value={item.price}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange2(e, item.id_tovar, "kolvo")
                      }
                      type="number"
                      value={item.kolvo}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange2(e, item.id_tovar, "name")
                      }
                      type="text"
                      value={item.name}
                    />
                    {item.imageUrl ? (
                      <img
                        className="bd_img"
                        src={require(`./Image_Storage/${item.imageUrl
                          .replace("http://localhost:3001", "")
                          .replace("Image_Storage\\", "")}`)}
                      />
                    ) : (
                      <div className="bd_img2"></div>
                    )}
                    <input
                      className="bd_fixo"
                      onChange={(e) =>
                        handleInputChange2(e, item.id_tovar, "virobnik")
                      }
                      type="text"
                      value={item.virobnik}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange2(e, item.id_tovar, "type")
                      }
                      type="text"
                      value={item.type}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange2(e, item.id_tovar, "sizes")
                      }
                      type="text"
                      value={item.sizes}
                    />
                    <input
                      className="bd_fixo"
                      onChange={(e) =>
                        handleInputChange2(e, item.id_tovar, "availability")
                      }
                      type="text"
                      value={item.availability}
                    />
                  </section>
                  <div
                    onClick={() => handleDelete3(item.id_tovar)}
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
        {selectedItem === "Товари" ? (
          <div className="bd_wrawpo">
            <section className="bd_tovar">
              <input id="id_tovar" type="number" placeholder="id(число)" />
              <input id="price" type="number" placeholder="ціна(число)" />
              <input id="kolvo" type="number" placeholder="кількість(число)" />
              <input id="name" type="text" placeholder="назва(текст)" />
              <input
                className="bd_img2"
                type="file"
                accept=""
                onChange={handleImageChange}
              />
              <input
                id="virobnik"
                className="bd_fixo"
                type="text"
                placeholder="фірма(текст)"
              />
              <input id="type" type="text" placeholder="тип(текст)" />
              <input id="sizes" type="text" placeholder="розмір(текст)" />
              <input
                id="availability"
                className="bd_fixo"
                type="text"
                placeholder="наявність(текст)"
              />
            </section>
            <button className="bd_close" onClick={handleAddData}>
              +
            </button>
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
              .filter((item) => (typeV ? item.vidg_type === typeV : true))
              .filter((item) => (grade === 0 ? true : item.grade === grade))
              .map((item) => (
                <div className="bd_wrawpo">
                  <section key={item.id} className="bd_tovar">
                    <li>{item.idvid}</li>
                    <input
                      onChange={(e) => handleInputChange3(e, item.idvid, "fio")}
                      type="text"
                      value={item.fio}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange3(e, item.idvid, "datakom")
                      }
                      type="date"
                      value={item.datakom.slice(0, 10)}
                    />
                    <li
                      onChange={(e) =>
                        handleInputChange3(e, item.idvid, "komment")
                      }
                    >
                      {item.komment}
                    </li>
                    <input
                      onChange={(e) =>
                        handleInputChange3(e, item.idvid, "grade")
                      }
                      type="text"
                      value={item.grade}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange3(e, item.idvid, "vidg_type")
                      }
                      type="text"
                      value={item.vidg_type}
                    />
                  </section>
                  <div
                    onClick={() => handleDelete2(item.idvid)}
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
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "fio")
                      }
                      type="text"
                      value={item.fio}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "email")
                      }
                      type="email"
                      value={item.email}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "tel")
                      }
                      type="tel"
                      value={item.tel}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "dostavka")
                      }
                      type="text"
                      value={item.dostavka}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "sposobOplata")
                      }
                      type="text"
                      value={item.sposobOplata}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "comment")
                      }
                      type="text"
                      value={item.comment}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "tovar")
                      }
                      type="text"
                      value={item.tovar}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "inshaLudina")
                      }
                      type="number"
                      value={item.inshaLudina}
                    />
                    <input
                      onChange={(e) =>
                        handleInputChange(e, item.id_zamov, "price")
                      }
                      type="number"
                      value={item.price}
                    />
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
