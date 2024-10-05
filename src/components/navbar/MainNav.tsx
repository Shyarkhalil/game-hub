import { FaSearch } from 'react-icons/fa';
import Input from './Input';
import './input.css';
const MainNav = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-input">
        <div className="input-container">
          <Input className="input-game" />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
