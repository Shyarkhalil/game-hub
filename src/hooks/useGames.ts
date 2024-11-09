import { Genre } from '../components/genres/GenresList';
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

const useGames = (searchTerm: string, selectedGenre: Genre | null) =>
  useData<Game>(
    '/games',
    {
      params: { search: searchTerm, genres: selectedGenre?.id },
    },
    [selectedGenre?.id, searchTerm]
  );

export default useGames;
