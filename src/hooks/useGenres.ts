import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-services';

interface GenresResult {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenresApiProps {
  results: GenresResult[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<GenresResult[]>([]);
  const [error, setError] = useState<string>(''); // Typing error as a string
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const cachedGenres = localStorage.getItem('genres');
    if (cachedGenres) {
      setGenres(JSON.parse(cachedGenres));
      return; // Skip fetching if cached data is found
    }
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenresApiProps>('/genres')
      .then(({ data }) => {
        setGenres(data.results); // Make sure to check if data structure has `results`
        localStorage.setItem('genres', JSON.stringify(data.results)); // Cache the data
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore canceled requests
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort(); // Cancel the request on cleanup
  }, []); // Will rerender the component when searchTerm is typed

  return { error, genres, isLoading };
};

export default useGenres;
