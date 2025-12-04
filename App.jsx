import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header';
import Home from './pages/Home';
import CharacterDetailPage from './pages/CharacterDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import './styles/App.css';

function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </FavoritesProvider>
  );
}

export default App;