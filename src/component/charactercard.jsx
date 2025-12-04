import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { STATUS_COLORS, STATUS_LABELS } from '../utils/constants.js';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(character);
  };

  return (
    <Link to={`/character/${character.id}`} className="character-card-link">
      <div className="character-card">
        <div className="character-image">
          <img src={character.image} alt={character.name} loading="lazy" />
          <button 
            className="favorite-button"
            onClick={handleFavoriteClick}
            aria-label={isFavorite(character.id) ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite(character.id) ? '★' : '☆'}
          </button>
        </div>
        
        <div className="character-info">
          <h3 className="character-name">{character.name}</h3>
          
          <div className="character-details">
            <div className="character-status">
              <span 
                className="status-dot"
                style={{ backgroundColor: STATUS_COLORS[character.status] }}
              />
              <span>
                {STATUS_LABELS[character.status]} - {character.species}
              </span>
            </div>
            
            <div className="character-location">
              <p className="location-label">Última ubicación:</p>
              <p className="location-name">{character.location.name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;