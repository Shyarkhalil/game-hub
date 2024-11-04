import useGames from '../../hooks/useGames';
import useGenres from '../../hooks/useGenres';
import { Genre } from '../genres/GenresList';
import GamePlatformIcons from './GamePlatformIcons';
import './games.css';
import GamesSkeleton from './GameSkeleton';

interface GameGrindProps {
  darkMode: boolean;
  searchTerm: string;
  selectedGenre: Genre | null;
}
const GameGrid: React.FC<GameGrindProps> = ({
  searchTerm,
  darkMode,
  selectedGenre,
}) => {
  const { data: games, error, isLoading } = useGames(searchTerm, selectedGenre);
  const { data: genres } = useGenres();
  return (
    <>
      {error && <h1 className="error-message">{error}</h1>}
      {!isLoading && games.length === 0 && !error && <p>No games found.</p>}
      {isLoading && genres.length ? (
        <GamesSkeleton count={games.length || 20} />
      ) : (
        <ul className="game-container">
          {games.map((game) => (
            <li key={game.id} className="game-list">
              <img src={game.background_image} alt={game.name} />
              <h1 className={darkMode ? 'dark-header' : ''}>{game.name}</h1>
              <GamePlatformIcons
                parentPlatform={game.parent_platforms}
                criticScores={game.metacritic}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
