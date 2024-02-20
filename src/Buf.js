import React, { useState, useEffect } from "react";
import "./index.css";

function Buf() {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

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

  const handleBut = async () => {
    try {
      console.log("Selected Image:", selectedImage);
      const formData = new FormData();
      formData.append("id", "5"); // Примерный ID для демонстрации
      formData.append("name", "Новые данные2"); // Примерное имя для демонстрации
      formData.append("image", selectedImage); // Используйте сам файл, а не его путь

      const response = await fetch("http://localhost:3001/api/addData", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      console.log("Данные успешно добавлены в базу данных");
      fetchData(); // Обновляем данные на клиенте после успешной отправки
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error.message);
    }
  };

  const handleRename = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/renameData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "5", newName: "Новое название" }), // Замените "5" на актуальный идентификатор записи, которую вы хотите переименовать, и "Новое название" на новое название
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      console.log("Данные успешно переименованы в базе данных");
      // Добавьте здесь логику для обновления данных на клиенте, если это необходимо
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/deleteData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "5" }), // Замените "5" на актуальный идентификатор записи, которую вы хотите удалить
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      data.map((item) => {
        item.imageUrl &&
          console.log(item.imageUrl.replace("http://localhost:3001/", ""));
      });
      console.log("Данные успешно удалены из базы данных");
      // Добавьте здесь логику для обновления данных на клиенте, если это необходимо
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error.message);
    }
  };
  const thiss = "nif.png";

  return (
    <div className="App">
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p style={{ color: "red" }}>Name: {item.name}</p>
            {item.imageUrl && (
              <img
                className="testo"
                style={{
                  backgroundImage: `url(${require("./Image_Storage/" +
                    item.imageUrl.replace("http://localhost:3001", ""))})`,
                }}
              />
            )}
          </div>
        ))}
        <button onClick={handleBut}>1ADD ME</button>
        <button onClick={handleDelete}>DELETE STRING</button>
        <form onSubmit={handleBut} encType="multipart/form-data">
          <input type="file" accept="" onChange={handleImageChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Buf;
