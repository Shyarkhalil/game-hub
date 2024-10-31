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

const useGames = (searchTerm: string) => useData<Game>('/games', searchTerm);

export default useGames;
