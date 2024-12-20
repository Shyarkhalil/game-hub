import useGenres from '../../hooks/useGenres';
import './genres.css';
export interface Genre {
  id: number;
  name: string;
  slug: string;
}
interface GenreProps {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenresList: React.FC<GenreProps> = ({
  selectedGenre,
  onSelectedGenre,
}) => {
  const { data } = useGenres();
  return (
    <div className="genres_list_Div">
      <h1>Genres</h1>
      <ul>
        {data.map((genre) => (
          <li
            style={{
              display: 'flex',
              margin: '15px 0',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            key={genre.id}
            onClick={() => onSelectedGenre(genre)}
          >
            <img
              src={genre.image_background}
              alt={genre.name}
              style={{ width: '30%', borderRadius: '5px', height: '30px' }}
            />
            <span
              style={{
                marginLeft: '15px',
                fontSize: '13px',
                fontWeight: genre.id === selectedGenre?.id ? 'bold' : 'normal',
              }}
            >
              {genre.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;
