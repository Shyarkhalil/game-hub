import useGames from '../../hooks/useGames';
import GamePlatformIcons from './GamePlatformIcons';
import './games.css';
import GamesSkeleton from './GameSkeleton';

interface GameGrindProps {
  darkMode: boolean;
  searchTerm: string;
}
const GameGrid: React.FC<GameGrindProps> = ({ searchTerm, darkMode }) => {
  const { games, error, isLoading } = useGames(searchTerm);
  console.log(games);

  return (
    <>
      {error && <h1 className="error-message">{error}</h1>}
      {!error && games.length === 0 && <p>No games found.</p>}
      {isLoading ? (
        <GamesSkeleton count={games.length || 20} />
      ) : (
        <ul className="game-container">
          {games.map((game) => (
            <li key={game.id} className="game-list">
              <img src={game.background_image} alt={game.name} />
              <h1 className={darkMode ? 'dark-header' : ''}>{game.name}</h1>
              <GamePlatformIcons parentPlatform={game.parent_platforms} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
