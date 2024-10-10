import { useEffect, useState } from 'react';
import apiClient from '../services/api-services';
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

const useGames = (searchTerm: string) => {
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

  return { error, games };
};

export default useGames;
