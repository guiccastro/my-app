import React from "react";
import profileImage from "../assets/image-perfil.png";
import './Banner.css';

export default function Banner() {
  return (
    <section id="banner" className="banner">
      <h1 className="title">Guilherme Silva de Castro</h1>

      <div className="perfil-links">
        <img src={profileImage} alt="Imagem de Perfil" className="perfil" />
        <div className="links">
          <a href="https://www.linkedin.com/in/guilhermescastro/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/guiccastro" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="https://guilhermescastro.itch.io/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-itch-io"></i> Itch.io
          </a>
        </div>
      </div>
      <p className="description">
        Sou um Engenheiro de Computação de 26 anos de idade formado na Universidade Federal do Rio Grande (FURG).
      </p>
    </section>
  );
};
