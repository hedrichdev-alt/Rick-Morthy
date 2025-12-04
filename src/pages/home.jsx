import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { useCharacters } from '../hooks/useCharacters';
import './Home.css';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  const search = searchParams.get('search') || '';
  
  const { characters, info, loading, error } = useCharacters(page, search);
  const [localSearch, setLocalSearch] = useState(search);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage, search });
  };

  const handleSearch = (searchTerm) => {
    setSearchParams({ page: 1, search: searchTerm });
    setLocalSearch(searchTerm);
  };

  if (error) {
    return (
      <div className="error">
        <h2>¡Ups! Algo salió mal</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home-header">
        <h2>Explora el Universo de Rick y Morty</h2>
        <p>Descubre todos los personajes de la serie</p>
      </div>
      
      <SearchBar onSearch={handleSearch} initialValue={localSearch} />
      
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Cargando personajes...</p>
        </div>
      ) : characters.length === 0 ? (
        <div className="empty-state">
          <h3>No se encontraron personajes</h3>
          <p>Intenta con otro término de búsqueda</p>
        </div>
      ) : (
        <>
          <div className="characters-grid">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          
          {info.pages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={info.pages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;


