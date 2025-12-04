import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './src/context/FavoritesContext';
import Header from './src/component/Header';
import Home from './src/pages/home';
import CharacterDetailPage from './src/pages/CharacterDetailpage';
import FavoritesPage from './src/pages/FavoritesPage';
import './src/styles/App.css';

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