import React from "react";
import './Languages.css';

export default function Languages() {
  return (
    <section id="languages" className="languages">
      <h1 className="section-title">Idiomas</h1>

      <div className="competence-list">
        <div className="item">
          <h2>Português</h2>
          <p className="level advanced">Nativo</p>
        </div>

        <div className="item">
          <h2>Inglês</h2>
          <p className="level intermediary">Avançado</p>
        </div>
      </div>
    </section>
  );
};
