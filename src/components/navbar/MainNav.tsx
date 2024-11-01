import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoGameControllerSharp } from 'react-icons/io5';
import Input from './Input';
import './input.css';
interface MainNaveProps {
  onToggleChange: () => void;
  handleSearch: (searchTerm: string) => void; // Expecting a string argument
  searchTerm: string; // New prop to hold the current search term
}
const MainNav: React.FC<MainNaveProps> = ({
  onToggleChange,
  handleSearch,
  searchTerm,
}) => {
  const [isToggled, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    onToggleChange();
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(target.value); // Update the search term in App component
  };
  return (
    <nav className="navbar-container">
      <div className="icon-container">
        <IoGameControllerSharp
          size={25}
          color={isToggled ? 'white' : '#29607b'}
        />
      </div>
      <div className="input-container">
        <Input
          className="input-game"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Search"
        />
        <FaSearch className="search-icon" />
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
