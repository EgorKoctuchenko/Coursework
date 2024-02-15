import React, { useState, useEffect } from "react";
import "./index.css";

function MainMenu() {
  return (
    <main className="m_wrap">
      <article className="m_reklama"></article>
      <article className="m_hotKat">
        <h1>Популярні категорії</h1>
        <div>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </div>
        <div>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </div>
      </article>
    </main>
  );
}

export default MainMenu;
