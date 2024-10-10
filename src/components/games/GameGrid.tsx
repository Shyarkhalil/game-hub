import useGames from '../../hooks/useGames';
import './games.css';
interface GameGrindProps {
  darkMode: boolean;
  searchTerm: string;
}

const GameGrid: React.FC<GameGrindProps> = ({ searchTerm, darkMode }) => {
  const { games, error } = useGames(searchTerm);
  return (
    <>
      {error && <h1 className="error-message">{error}</h1>}
      {!error && games.length === 0 && <p>No games found.</p>}
      <ul className="game-container">
        {games.map((game) => (
          <li key={game.id} className="game-list">
            <img src={game.background_image} alt={game.name} />
            <h1 className={darkMode ? 'dark-header' : ''}>{game.name}</h1>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
