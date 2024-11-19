import { GameQuery } from '../App';
import useData from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (searchTerm: string, gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        search: searchTerm,
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [searchTerm, gameQuery]
  );

export default useGames;
