import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import CharacterCard from '../components/CharacterCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <div className="empty-content">
          <h2>No tienes personajes favoritos</h2>
          <p>Agrega algunos personajes a tus favoritos para verlos aquí.</p>
          <Link to="/" className="explore-button">
            Explorar Personajes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h2>Mis Personajes Favoritos</h2>
        <p className="favorites-count">{favorites.length} personaje{favorites.length !== 1 ? 's' : ''}</p>
      </div>
      
      <div className="favorites-grid">
        {favorites.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;