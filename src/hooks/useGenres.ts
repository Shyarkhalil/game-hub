import useData from './useData';

interface GenresResult {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useData<GenresResult>('./genres');

export default useGenres;
