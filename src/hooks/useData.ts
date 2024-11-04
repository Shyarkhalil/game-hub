import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-services';

interface FetchResponse<T> {
  results: T[];
}

function useData<T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState(false);
  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
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
    },
    deps ? [...deps] : []
  );

  return { error, data, isLoading };
}

export default useData;
