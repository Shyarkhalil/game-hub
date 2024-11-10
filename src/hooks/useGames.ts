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

const useGames = (
  searchTerm: string,
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    '/games',
    {
      params: {
        search: searchTerm,
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, searchTerm, selectedPlatform?.id]
  );

export default useGames;
