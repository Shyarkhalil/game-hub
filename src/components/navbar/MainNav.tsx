import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoGameControllerSharp } from 'react-icons/io5';
import Input from './Input';
import './input.css';
interface MainNaveProps {
  onToggleChange: () => void;
}
const MainNav: React.FC<MainNaveProps> = ({ onToggleChange }) => {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    onToggleChange();
  };
  return (
    <nav className="navbar-container">
      <div className="icon-container">
        <IoGameControllerSharp
          size={25}
          color={isToggled ? 'white' : '#29607b'}
        />
      </div>
      <div className="navbar-input">
        <div className="input-container">
          <Input className="input-game" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="toggle-button">
        <Input
          type="checkbox"
          role="switch"
          className="toggle-switch"
          checked={isToggled}
          onChange={handleToggle}
          labelClassName={isToggled ? 'dark-mode-label' : 'light-mode-label'}
          labelText={isToggled ? 'Dark Mode' : 'Light Mode'}
        />
      </div>
    </nav>
  );
};

export default MainNav;
