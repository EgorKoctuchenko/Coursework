import React, { useState, useEffect } from "react";
import "./index.css";

function Vidgyki(props) {
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
      <nav className="v_mode">
        <li>Всі відгуки</li>
        <li>Про товари</li>
        <li>Про Магазин</li>
      </nav>
    </main>
  );
}

export default Vidgyki;
