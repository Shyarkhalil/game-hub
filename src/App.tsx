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
export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
}
function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) =>
            setGameQuery((prevQuery) => ({
              ...prevQuery,
              genre: genre,
            }))
          }
        />
        <GameGrid
          searchTerm={searchTerm}
          darkMode={isDarkMode}
          gameQuery={gameQuery}
          onSelectedPlatform={(platform) =>
            setGameQuery((prevQuery) => ({
              ...prevQuery,
              platform: platform,
            }))
          }
        />
      </div>
    </div>
  );
}

export default App;
