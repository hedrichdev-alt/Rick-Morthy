import { useState, useEffect, useCallback } from 'react';
import { getCharacters } from '../services/api';
import { DEBOUNCE_DELAY } from '../utils/constants';

export const useCharacters = (page = 1, searchQuery = '') => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCharacters(page, searchQuery);
      setCharacters(data.results || []);
      setInfo(data.info || {});
    } catch (err) {
      setError('Error al cargar los personajes. Intenta nuevamente.');
      console.error('Error fetching characters:', err);
    } finally {
      setLoading(false);
    }
  }, [page, searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCharacters();
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [fetchCharacters]);

  return {
    characters,
    info,
    loading,
    error,
    refetch: fetchCharacters,
  };
};