import React, { useState } from 'react';
import './Header.css';
import TitleHeader from './TitleHeader';
import HeaderTabs from './HeaderTabs';
import { HeaderProps } from './HeaderProps';

export default function Header({
  content,
  activeTab,
  language,
  onLanguageChange,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <TitleHeader title={content.title} />

        <HeaderTabs tabs={content.tabs} activeTab={activeTab} />

        <div className="language-switcher">
          <button
            className={language === 'pt' ? 'active' : ''}
            onClick={() => onLanguageChange('pt')}
          >
            PT
          </button>
          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => onLanguageChange('en')}
          >
            EN
          </button>
        </div>

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
            tabs={content.tabs}
            activeTab={activeTab}
            isVertical
            onTabClick={() => setMenuOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
}
