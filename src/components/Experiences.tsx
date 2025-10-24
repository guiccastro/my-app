import React from "react";
import './Experiences.css';
import hcltechLogo from "../assets/hcltech_logo.jpeg";
import nelogicaLogo from "../assets/nelogica_logo.jpg";
import furgLogo from "../assets/furg_logo.jpg";
import autoceresLogo from "../assets/autoceres_logo.png";
import furgbotLogo from "../assets/furgbot_logo.png";

export default function Experiences() {
  return (
    <section id="experiences" className="experiences">
      <h1 className="section-title">Experiências</h1>

      <div className="list">
        <div className="item">
          <div className="header">
            <img src={hcltechLogo} alt="HCLTech Logo" />
            <div className="text">
              <h2>Desenvolvedor Android</h2>
              <h3>HCLTech</h3>
              <h4>São Leopoldo</h4>
              <h5>Agosto de 2024 - o momento</h5>
            </div>
          </div>

          <p className="description">Trabalhando na SAP como desenvolvedor Android terceirizado.</p>
          <p className="competences">Kotlin ● GraphQL ● Jetpack Compose ● Injeção de Dependências</p>
        </div>

        <div className="item">
          <div className="header">
            <img src={nelogicaLogo} alt="Nelogica Logo" />
            <div className="text">
              <h2>Desenvolvedor Android II</h2>
              <h3>Nelogica</h3>
              <h4>Porto Alegre (Remoto)</h4>
              <h5>Janeiro de 2022 - Abril de 2023</h5>
            </div>
          </div>

          <p className="description">Trabalhei no time de desenvolvimento Android usando Kotlin, criando novas
            telas e recursos,
            sempre
            seguindo as melhores práticas e padrões de qualidade, utilizando XML e arquitetura MVVM.</p>
          <p className="competences">Kotlin ● Retrofit ● Coroutines ● XML ● Room ● SQLite ● Injeção de
            Dependências ● Arquitetura MVVM</p>
        </div>

        <div className="item">
          <div className="header">
            <img src={nelogicaLogo} alt="Nelogica Logo" />
            <div className="text">
              <h2>Desenvolvedor Android I</h2>
              <h3>Nelogica</h3>
              <h4>Porto Alegre (Remoto)</h4>
              <h5>Maio de 2021 - Janeiro de 2022</h5>
            </div>
          </div>

          <p>Trabalhei no time de sustentação Android usando Kotlin, com correção de bugs, fazendo
            aprimoramentos, monitorando problemas e otimizando performance, tudo isso utilizando o Firebase
            Crashlytics para o acompanhamento de crashes.</p>
          <p className="competences">Kotlin ● Retrofit ● Coroutines ● XML ● Room ● SQLite ● Injeção de
            Dependências ● Arquitetura MVVM ● Firebase Crashlytics</p>
        </div>

        <div className="item">
          <div className="header">
            <img src={furgLogo} alt="FURG Logo" />
            <div className="text">
              <h2>Bolsista - Desenvolvedor Python</h2>
              <h3>Universidade Federal do Rio Grande</h3>
              <h4>Rio Grande</h4>
              <h5>Março de 2021 - Junho de 2021</h5>
            </div>
          </div>

          <p className="description">
            Auxílio nas atividades técnicas do projeto, bem como o desenvolvimento de pipeline para o
            trabalho de sanitização de dados e criação de um portal online para a visualização pública
            destes dados, utilizando Python.
          </p>
          <p className="competences">Python</p>
        </div>

        <div className="item">
          <div className="header">
            <img src={autoceresLogo} alt="AUTOCERES Logo" />
            <div className="text">
              <h2>Desenvolvedor Android</h2>
              <h3>Equipe AUTOCERES</h3>
              <h4>Rio Grande</h4>
              <h5>Maio de 2019 - Dezembro de 2019</h5>
            </div>
          </div>

          <p className="description">
            Projeto AUTOCERES - Projeto de Pesquisa e Desenvolvimento buscando soluções inovadoras para
            agricultura familiar. O principal estudo de caso em andamento é de um pulverizador em barras
            inteligente.<br /><br />
            Desenvolvi um aplicativo completamente novo para Android (feito no Android Studio em linguagem
            Java), o qual controlava os bicos de uma barra de um pulverizador através de bluetooth em
            conexão com um Arduino (linguagem C).
          </p>
          <p className="competences">Android Studio ● Java ● Arduino ● C ● Comunicação Bluetooth</p>
        </div>

        <div className="item">
          <div className="header">
            <img src={furgbotLogo} alt="FURGBOT Logo" />
            <div className="text">
              <h2>Desenvolvedor C / C++</h2>
              <h3>Equipe de Robótica FURGBOT</h3>
              <h4>Rio Grande</h4>
              <h5>Abril de 2018 - Junho de 2019</h5>
            </div>
          </div>

          <p className="description">
            Projeto FURGBOT - A participação da FURG em Competições de Robótica como Ambiente Curricular
            Complementar no Ensino de Engenharia e Computação. <br /><br />
            Ajudei na programação dos robôs (linguagem C e C++) da FURG para a competição de robótica.
          </p>
          <p className="competences">C ● C++</p>
        </div>
      </div>
    </section>
  );
};
