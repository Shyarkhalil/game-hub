import { useEffect, useState } from 'react';
import apiClient from '../../services/api-services';
import './games.css';

interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

interface GameGrindProps {
  searchTerm: string;
  darkMode: boolean;
}

const GameGrid: React.FC<GameGrindProps> = ({ searchTerm, darkMode }) => {
  const [games, setGames] = useState<Game[]>([]); // Typing the games state as an array of ResultProps
  const [error, setError] = useState<string>(''); // Typing error as a string

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>('/games', {
        params: {
          search: searchTerm, // dynamically insert the user's search term
        },
      })
      .then(({ data }) => {
        setGames(data.results); // Make sure to check if data structure has `results`
        console.log(searchTerm);
      })
      .catch((err) => setError(err.message));
  }, [searchTerm]);
  return (
    <>
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
