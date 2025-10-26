import React, { useState } from 'react';
import './Header.css';
import TitleHeader from './TitleHeader';
import HeaderTabs from './HeaderTabs';
import { HeaderProps } from './HeaderProps';
import content from '../../content.json';
import { Content } from '../../content.types';

export default function Header({ activeTab }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { tabs } = (content as Content).header;

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
          {tabs.map((tab, index) => (
            <a href={tab.href} onClick={() => setMenuOpen(false)} key={index}>
              {tab.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
