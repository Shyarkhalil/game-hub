import { useState } from 'react';
import MainNav from './components/navbar/MainNav';
import './styles/App.css';
function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const onToggleBackground = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div className={isDarkMode ? 'app-container-light' : 'app-container-dark'}>
      <MainNav onToggleChange={onToggleBackground} />
    </div>
  );
}

export default App;
