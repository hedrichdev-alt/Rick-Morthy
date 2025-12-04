import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCharacterById } from '../services/api';
import CharacterDetail from '../components/CharacterDetail';
import './CharacterDetailPage.css';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        setError('Error al cargar el personaje');
        console.error('Error fetching character:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando personaje...</p>
      </div>
    );
  }

  if (error || !character) {
    return (
      <div className="error">
        <h2>Personaje no encontrado</h2>
        <p>{error || 'El personaje que buscas no existe.'}</p>
        <button onClick={handleGoBack} className="back-button">
          Volver al listado
        </button>
      </div>
    );
  }

  return (
    <div className="character-detail-page">
      <button onClick={handleGoBack} className="back-button">
        ← Volver al listado
      </button>
      <CharacterDetail character={character} />
    </div>
  );
};

export default CharacterDetailPage;