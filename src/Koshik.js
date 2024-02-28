import React, { useState, useEffect } from "react";
import "./index.css";

function InfoTovar(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //Отримання даних для фото
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
    <main className="it_wrap">
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "} <span style={{ color: "rgb(255, 188, 87)" }}>Кошик</span>
      </section>
      <h1 className="k_h1">Оформлення замовлення</h1>
    </main>
  );
}

export default InfoTovar;
