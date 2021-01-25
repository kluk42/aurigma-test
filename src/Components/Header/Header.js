import React, { useState, } from 'react';
import SvgHeaderLogo from '../SvgHeaderLogo/SvgHeaderLogo';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuBtnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
      <header className="header">
        <SvgHeaderLogo className="header__logo" />
        <div className={`header__menu-container ${isMenuOpen && 'header__menu-container_open'}`}>
          <Navigation />
          <div className="header__controls">
            <p className="header__text-item">1-800-661-8190</p>
            <button id="magnifying-glass" className="header__magnifying-glass header__magnifying-glass_type_mobile">
              <i className="fa fa-search"></i>
            </button>
            <button className="header__view-btn">View Demo</button>
          </div>
        </div>
        <div className="header__mobile-controls">
          <button className="header__magnifying-glass header__magnifying-glass_type_mobile">
            <i id="magnifying-glass" className="fa fa-search"></i>
          </button>
          <button onClick={onMenuBtnClick} className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn_active' : ''}`}>
            <i id="burger" className="fa fa-bars"></i>
          </button>
        </div>
      </header>
  );
}

export default Header;
