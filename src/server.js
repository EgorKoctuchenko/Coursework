const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer"); // Модуль для обработки файлов
const fs = require("fs"); // модуль для работы с файловой системой Node.js

const uploadDirectory = "./Image_Storage"; // Директория, куда будут сохраняться загруженные файлы

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}
const upload = multer({ dest: uploadDirectory }); // Создание экземпляра multer

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sonari8190qwert",
  database: "shop",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const path = require("path");

// POST-запит для додаваня даних у бд
app.post("/api/addOrder", (req, res) => {
  const {
    id_zamov,
    fio,
    email,
    tel,
    dostavka,
    sposobOplata,
    comment,
    tovar,
    inshaLudina,
    price,
  } = req.body;

  // Далее выполните операцию вставки данных в вашу базу данных
  // Пример:
  const query =
    "INSERT INTO zamov (id_zamov, fio, email, tel, dostavka, sposobOplata, comment, tovar, inshaLudina, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  pool.query(
    query,
    [
      id_zamov,
      fio,
      email,
      tel,
      dostavka,
      sposobOplata,
      comment,
      tovar,
      inshaLudina,
      price,
    ],
    (err, results) => {
      if (err) {
        console.error("Ошибка выполнения SQL-запроса:", err);
        res.status(500).send("Ошибка сервера");
      } else {
        console.log("Данные успешно добавлены в базу данных");
        res.status(200).send("Данные успешно добавлены в базу данных");
      }
    }
  );
});

// Обработка POST-запроса для удаление данных в базу данных
app.post("/api/deleteData", (req, res) => {
  const { id } = req.body;
  const query = "DELETE FROM test WHERE id = ?";
  pool.query(query, [id], (err, results) => {
    if (err) {
      console.error("Ошибка выполнения SQL-запроса:", err); // Выводим ошибку в консоль
      res.status(500).send("Ошибка сервера");
    } else {
      console.log("Данные успешно удалены из базы данных");
      res.status(200).send("Данные успешно удалены из базы данных");
    }
  });
});

// Обработка POST-запроса для переименования данных в базе данных
app.post("/api/renameData", (req, res) => {
  const { id, newLike } = req.body;
  const query = "UPDATE tovar SET like = ? WHERE id = ?";
  pool.query(query, [newLike, id], (err, results) => {
    if (err) {
      console.error("Ошибка выполнения SQL-запроса:", err);
      res.status(500).send("Ошибка сервера");
    } else {
      console.log("Данные успешно переименованы в базе данных");
      res.status(200).send("Данные успешно переименованы в базе данных");
    }
  });
});

//Отримання даних для товарів
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM tovar";

  pool.query(query, (err, results) => {
    if (err) {
      console.error("Ошибка выполнения SQL-запроса:", err);
      res.status(500).send("Ошибка сервера");
    } else {
      const AllData = results.map((item) => ({
        id: item.id,
        price: item.price,
        kolvo: item.kolvo,
        name: item.name,
        imageUrl: item.photo ? `${item.photo}` : null,
        virobnik: item.virobnik,
        type: item.type,
        korzina: item.korzina,
        like: item.like,
        sizes: item.sizes,
        availability: item.availability,
      }));
      res.json(AllData);
    }
  });
});

//Отримання даних для відгуків
app.get("/api/vidg", (req, res) => {
  const query = "SELECT * FROM vidgyk";

  pool.query(query, (err, results) => {
    if (err) {
      console.error("Ошибка выполнения SQL-запроса:", err);
      res.status(500).send("Ошибка сервера");
    } else {
      const AllVigk = results.map((item_vid) => ({
        idvid: item_vid.idvid,
        fio: item_vid.fio,
        datakom: item_vid.datakom,
        komment: item_vid.komment,
        grade: item_vid.grade,
        vidg_type: item_vid.vidg_type,
      }));
      res.json(AllVigk);
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
