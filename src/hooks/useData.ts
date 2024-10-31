import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-services';

interface FetchResponse<T> {
  results: T[];
}

function useData<T>(endPoint: string, searchTerm: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endPoint, {
        params: {
          search: searchTerm, // dynamically insert the user's search term
          signal: controller.signal,
        },
      })
      .then(({ data }) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore canceled requests
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort(); // Cancel the request on cleanup
  }, [searchTerm]);

  return { error, data, isLoading };
}

export default useData;
