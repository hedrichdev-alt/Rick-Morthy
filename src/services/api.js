import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const getCharacters = async (page = 1, name = '') => {
  try {
    const response = await api.get('/character', {
      params: {
        page,
        name,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return { results: [], info: { next: null, prev: null } };
    }
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await api.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMultipleCharacters = async (ids) => {
  try {
    const response = await api.get(`/character/${ids.join(',')}`);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    throw error;
  }
};

export const getEpisodeDetails = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};