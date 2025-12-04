import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './Header.css';

const Header = () => {
  const { favorites } = useFavorites();

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>Rick & Morty Explorer</h1>
        </Link>
        
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Personajes
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/favorites" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Favoritos
                {favorites.length > 0 && (
                  <span className="favorites-badge">{favorites.length}</span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;