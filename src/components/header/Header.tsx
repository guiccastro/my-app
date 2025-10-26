import React, { useState } from 'react';
import './Header.css';
import TitleHeader from './TitleHeader';
import HeaderTabs from './HeaderTabs';
import { HeaderProps } from './HeaderProps';

export default function Header({ activeTab }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <TitleHeader />

        <HeaderTabs activeTab={activeTab} />

        <button className="menu" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </button>
      </nav>

      <nav
        id="nav-dropdown"
        className={`nav-dropdown ${menuOpen ? 'open' : ''}`}
      >
        <div className="options-dropdown">
          <a href="#about-me" onClick={() => setMenuOpen(false)}>
            Sobre Mim
          </a>
          <a href="#experiences" onClick={() => setMenuOpen(false)}>
            Experiências
          </a>
          <a href="#academic" onClick={() => setMenuOpen(false)}>
            Formação Acadêmica
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>
          <a href="#languages" onClick={() => setMenuOpen(false)}>
            Idiomas
          </a>
          <a href="#competences" onClick={() => setMenuOpen(false)}>
            Competências
          </a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>
            Certificados
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}
