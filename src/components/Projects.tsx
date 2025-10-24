import React from "react";
import './Projects.css';
import curriculoOnlineBanner from "../assets/curriculo_online_banner.png";
import mydexBanner from "../assets/mydex_banner.png";
import tccBanner from "../assets/tcc_banner.png";
import autoceresBanner from "../assets/autoceres_banner.jpg";
import furgbotBanner from "../assets/furgbot_banner.jpg";

const Projects: React.FC = () => (
  <section id="projects" className="projects">
    <h1 className="section-title">Projetos</h1>

    <div className="list">
      <a className="item" href="https://guiccastro.github.io/" target="_blank" rel="noreferrer">
        <img src={curriculoOnlineBanner} alt="Currículo Online Banner" />
        <h2>Currículo Online</h2>
        <h3>Página Web</h3>
        <h4>Junho de 2024 – até o momento</h4>
        <p>Minha página web para servir como currículo online e portfólio para Desenvolvimento Web.</p>
        <h5>Desenvolvimento Web ● HTML5 ● CSS ● JavaScript</h5>
      </a>

      <a className="item" href="https://play.google.com/store/apps/details?id=com.project.mypokedex" target="_blank" rel="noreferrer">
        <img src={mydexBanner} alt="MyDex Banner" />
        <h2>MyDex</h2>
        <h3>Aplicativo para Android</h3>
        <h4>Junho de 2023 – até o momento</h4>
        <p>MyDex é um aplicativo para Android desenvolvido todo por mim com o uso da PokeAPI. O objetivo
          dele é aprimorar meus conhecimentos em desenvolvimento Android com Retrofit, Compose, Room,
          entre outros. O aplicativo foi lançado na Play Store para que qualquer pessoa possa desfrutar
          dele.</p>
        <h5>Kotlin ● Retrofit ● Coroutines ● Compose ● Room ● SQLite ● Injeção de Dependências ● Arquitetura
          MVVM</h5>
      </a>

      <a className="item" href="https://guilhermescastro.itch.io/unity-sound-simulator" target="_blank" rel="noreferrer">
        <img src={tccBanner} alt="TCC Banner" />
        <h2>Projeto de Conclusão de Curso</h2>
        <h3>Universidade Federal de Rio Grande - Pesquisador e desenvolvedor</h3>
        <h4>Janeiro de 2020 – Dezembro de 2020</h4>
        <p>
          <b>Software para o cálculo da propagação do som em baixo da água em Unity utilizando Ray
            Tracing.</b><br /><br />
          Realizei os estudos do comportamento físico de uma onda sonora no meio aquático e recriei estes
          comportamentos na Unity (linguagem C#) utilizando a técnica de Ray Tracing.
          Extra: Criação de um objeto 3D a partir de um arquivo de batimetria.
        </p>
        <h5>Unity ● C# ● Ray Tracing</h5>
      </a>

      <a className="item" href="https://www.facebook.com/AutoCERES/" target="_blank" rel="noreferrer">
        <img src={autoceresBanner} alt="AUTOCERES Banner" />
        <h2>AUTOCERES</h2>
        <h3>Universidade Federal de Rio Grande - Desenvolvedor de aplicativo Android</h3>
        <h4>Maio de 2019 – Dezembro de 2019</h4>
        <p>
          <b>Projeto de Pesquisa e Desenvolvimento buscando soluções inovadoras para agricultura familiar.
            Principal estudo de caso em andamento é de um pulverizador em barras
            inteligente.</b><br /><br />
          Desenvolvi um aplicativo completamente novo para Android (feito no Android Studio em linguagem
          Java), o qual controlava os bicos de uma barra de um pulverizador através de bluetooth em
          conexão com um Arduino (linguagem C).
        </p>
        <h5>Android Studio ● Java ● Arduino ● C ● Comunicação Bluetooth</h5>
      </a>

      <a className="item" href="https://www.instagram.com/furgbot/" target="_blank" rel="noreferrer">
        <img src={furgbotBanner} alt="FURGBOT Banner" />
        <h2>FURGBOT</h2>
        <h3>Universidade Federal de Rio Grande - Programador C / C++</h3>
        <h4>Abril de 2018 – Junho de 2019</h4>
        <p>
          <b>A participação da FURG em Competições de Robótica como Ambiente Curricular Complementar no
            Ensino de Engenharia e Computação.</b><br /><br />
          Ajudei na programação dos robôs (linguagem C e C++) da FURG para a competição de robótica.
        </p>
        <h5>C ● C++</h5>
      </a>
    </div>
  </section>
);

export default Projects;
