import { useState } from 'react';
import GameGrid from './components/games/GameGrid';
import MainNav from './components/navbar/MainNav';
import './styles/App.css';

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const onToggleBackground = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div className={isDarkMode ? 'app-container-dark' : 'app-container-light'}>
      <MainNav
        onToggleChange={onToggleBackground}
        handleSearch={setSearchTerm}
      />
      <GameGrid searchTerm={searchTerm} darkMode={isDarkMode} />
    </div>
  );
}

export default App;
