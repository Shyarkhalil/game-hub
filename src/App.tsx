import { useState } from 'react';
import GameGrid from './components/games/GameGrid';
import GenresList from './components/genres/GenresList';
import MainNav from './components/navbar/MainNav';
import './styles/App.css';

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const onToggleBackground = () => {
    setDarkMode((prevState) => !prevState);
  };
  const genericFontStyle = isDarkMode ? 'white' : 'black';
  return (
    <div
      className={isDarkMode ? 'app-container-dark' : 'app-container-light'}
      style={{
        color: genericFontStyle,
        fontFamily: 'Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <MainNav
        onToggleChange={onToggleBackground}
        handleSearch={setSearchTerm}
        searchTerm={searchTerm}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GenresList />
        <GameGrid searchTerm={searchTerm} darkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
