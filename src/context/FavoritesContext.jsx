import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('rickAndMortyFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('rickAndMortyFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (character) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === character.id)) {
        return prev;
      }
      return [...prev, character];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const toggleFavorite = (character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};