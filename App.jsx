import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './src/context/FavoritesContext.jsx';
import Header from './src/component/Header.jsx';
import Home from './src/pages/home.jsx';
import CharacterDetailPage from './src/pages/CharacterDetailpage.jsx';
import FavoritesPage from './src/pages/FavoritesPage.jsx';
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