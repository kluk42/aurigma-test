import React from 'react';

function Navigation() {
  return (
      <nav className="navigation">
          <ul className="navigation__links-list">
              <li className="navigation__list-item">
                  <a href="/" className="navigation__link">Products</a>
              </li>
              <li className="navigation__list-item">
                <a href="/" className="navigation__link">Features</a>
              </li>
              <li className="navigation__list-item">
                <a href="/" className="navigation__link">Getting Started</a>
              </li>
              <li className="navigation__list-item">
                <a href="/" className="navigation__link">Verticals</a>
              </li>
              <li className="navigation__list-item">
                <a href="/" className="navigation__link">Company</a>
              </li>
              <li className="navigation__list-item">
              <a href="/" className="navigation__link">My account</a>
              </li>
          </ul>
      </nav>
  );
}

export default Navigation;