import React from "react";
import profileImage from "../assets/image-perfil.png";
import './About.css';

const About: React.FC = () => (
  <section id="about-me" className="about">
    <h1 className="section-title">Sobre Mim</h1>

    <div className="description">
      <div className="description-text">
        <p>
          Sou Engenheiro de Computação formado pela FURG, com 2 anos de experiência profissional e sólidos conhecimentos em desenvolvimento Android. Também realizei um estágio com foco em desenvolvimento em Python.
        </p>
        <p>
          Minha trajetória acadêmica inclui participação em diversos projetos de pesquisa e desenvolvimento na FURG, onde aperfeiçoei minhas habilidades técnicas e colaborativas. Meu TCC foi feito na Unity com RayTracing, demonstrando minha capacidade de trabalhar com tecnologias avançadas e inovadoras.
        </p>
        <p>
          Além disso, possuo conhecimentos em desenvolvimento Web, o que me permite atuar em diferentes áreas da tecnologia. Estou sempre em busca de novos desafios e oportunidades para aplicar meu conhecimento e contribuir para o desenvolvimento de soluções tecnológicas de ponta.
        </p>
      </div>
      <img src={profileImage} alt="Imagem de Perfil" className="perfil" />
    </div>

    <div className="details">
      <div>
        <h1 className="subsection-title">Carteira de Motorista</h1>
        <p>Sim, tipo B</p>
      </div>
      <div>
        <h1 className="subsection-title">Data de Nascimento</h1>
        <p>16/04/1998</p>
      </div>
    </div>
  </section>
);

export default About;
