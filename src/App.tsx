import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import GameGrid from './components/games/GameGrid';
import GenresList from './components/genres/GenresList';
import MainNav from './components/navbar/MainNav';
import './styles/App.css';
interface Genre {
  id: number;
  name: string;
  slug: string;
}
interface Platform {
  id: number;
  name: string;
  slug: string;
}
function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
        <GenresList
          selectedGenre={selectedGenre}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        />
        <GameGrid
          searchTerm={searchTerm}
          darkMode={isDarkMode}
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        />
      </div>
    </div>
  );
}

export default App;
