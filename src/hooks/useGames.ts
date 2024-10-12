import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-services';

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
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = (searchTerm: string) => {
  const [games, setGames] = useState<Game[]>([]); // Typing the games state as an array of ResultProps
  const [error, setError] = useState<string>(''); // Typing error as a string
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>('/games', {
        params: {
          search: searchTerm, // dynamically insert the user's search term
          signal: controller.signal,
        },
      })
      .then(({ data }) => {
        setGames(data.results); // Make sure to check if data structure has `results`
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore canceled requests
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort(); // Cancel the request on cleanup
  }, [searchTerm]); // Will rerender the component when searchTerm is typed

  return { error, games, isLoading };
};

export default useGames;
