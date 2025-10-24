import React, { useState } from "react";
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <a className="main" href="#banner">Currículo Online</a>

        <div className="options">
          <a href="#about-me">Sobre Mim</a>
          <a href="#experiences">Experiências</a>
          <a href="#academic">Formação Acadêmica</a>
          <a href="#projects">Projetos</a>
          <a href="#languages">Idiomas</a>
          <a href="#competences">Competências</a>
          <a href="#certificates">Certificados</a>
          <a href="#contact">Contato</a>
        </div>

        <a href="javascript:void(0);" className="menu" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </nav>

      <nav id="nav-dropdown" className={`nav-dropdown ${menuOpen ? 'open' : ''}`}>
        <div className="options-dropdown">
          <a href="#about-me" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
          <a href="#experiences" onClick={() => setMenuOpen(false)}>Experiências</a>
          <a href="#academic" onClick={() => setMenuOpen(false)}>Formação Acadêmica</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#languages" onClick={() => setMenuOpen(false)}>Idiomas</a>
          <a href="#competences" onClick={() => setMenuOpen(false)}>Competências</a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificados</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
        </div>
      </nav>
    </header>
  );
};
