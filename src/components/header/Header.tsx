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
          <HeaderTabs
            activeTab={activeTab}
            isVertical
            onTabClick={() => setMenuOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
}
