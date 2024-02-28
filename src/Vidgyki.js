import React, { useState, useEffect } from "react";
import UserPh from "./img/userPhoto.svg";
import StarFill from "./img/StarFill.svg";
import StarNoFill from "./img/StarNoFill.svg";
import smallLogo from "./img/DivanVidgyk.svg";
import "./index.css";

function Vidgyki(props) {
  //Для стилів
  const [marL, setMarL] = useState(0);
  const [widtL, setWidtL] = useState(100);
  ///
  const [vidg, setVidg] = useState([]);
  const [thisType, setThisType] = useState("allvidg");
  const handleThisType = (bufing) => {
    setThisType(bufing);
  };

  const handlePageChange = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vidg.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredData = vidg.filter((item) => item.type === props.typee);

  return (
    <main>
      <section className="this_choice">
        <span onClick={() => props.setThisPage(0)} className="golovna">
          Головна
        </span>{" "}
        {" › "}
        <span style={{ color: "rgb(255, 188, 87)" }}>Відгуки</span>
      </section>
      <h1 className="v_h1">Відгуки</h1>
      <article className="v_wrape">
        <div>
          <nav className="v_mode">
            <li
              className={thisType === "allvidg" ? "v_active" : ""}
              onClick={() => {
                setMarL(0);
                setWidtL(100);
                setCurrentPage(1);
                handleThisType("allvidg");
              }}
            >
              Всі відгуки
            </li>
            <li
              className={thisType === "tovar" ? "v_active" : ""}
              onClick={() => {
                setMarL(125);
                setWidtL(113);
                setCurrentPage(1);
                handleThisType("tovar");
              }}
            >
              Про товари
            </li>
            <li
              className={thisType === "shop" ? "v_active" : ""}
              onClick={() => {
                setWidtL(130);
                setMarL(260);
                setCurrentPage(1);
                handleThisType("shop");
              }}
            >
              Про Магазин
            </li>
          </nav>
          <div className="v_line">
            <div
              className="v_line_two"
              style={{
                margin: "0px 0px 0px " + marL + "px",
                width: widtL + "px",
              }}
            ></div>
          </div>
          <article className="v_comments">
            {thisType !== "allvidg" &&
              vidg
                .filter((item) => item.vidg_type === thisType)
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((item) => (
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
            {thisType === "allvidg" &&
              vidg.slice(indexOfFirstItem, indexOfLastItem).map((item) => (
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
        </div>

        <div>
          <div className="v_yourVidgyk">
            <div className="v_yourVidgyk_upp">
              <img src={smallLogo} />
              <div className="v_yourVidgyk_upp_next">
                <h4>Магазин меблів для дому «KROVATO»</h4>
                <h5>
                  5.0
                  <div>
                    {Array.from({ length: 5 }, (_, i) => (
                      <img key={i} src={StarFill} />
                    ))}
                  </div>
                </h5>
                <h6>Базовано на відгуках: {vidg.length}</h6>
              </div>
            </div>
            <form className="v_form">
              <h2>Залишіть свій відгук про магазин</h2>
              <input type="text" placeholder="Ваше ім'я прізвище"></input>
              <input type="text" placeholder="Ваше ім'я прізвище"></input>
              <textarea placeholder="Ваше ім'я прізвище"></textarea>
              <h5>Ваша оцінка:</h5>
              <div>
                <img src={StarNoFill} />
                <img src={StarNoFill} />
                <img src={StarNoFill} />
                <img src={StarNoFill} />
                <img src={StarNoFill} />
              </div>
              <button>Залишити відгук</button>
            </form>
          </div>
        </div>
      </article>
      <ul className="li_buttons">
        <button
          onClick={() => {
            paginate(currentPage - 1);
            handlePageChange();
          }}
        >
          {" < "}
        </button>
        {(thisType !== "allvidg" &&
          vidg.filter((item) => item.vidg_type === thisType).length >
            itemsPerPage) ||
        (thisType === "allvidg" && vidg.length > itemsPerPage) ? (
          <>
            {Array.from(
              {
                length: Math.ceil(
                  (thisType !== "allvidg"
                    ? vidg.filter((item) => item.vidg_type === thisType).length
                    : vidg.length) / itemsPerPage
                ),
              },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    paginate(i + 1);
                    handlePageChange();
                  }}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              onClick={() => {
                paginate(currentPage + 1);
                handlePageChange();
              }}
            >
              {">"}
            </button>
          </>
        ) : null}
      </ul>
    </main>
  );
}

export default Vidgyki;
