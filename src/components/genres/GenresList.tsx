import useGenres from '../../hooks/useGenres';
interface darkModeProps {
  darkMode: boolean;
}
const GenresList: React.FC<darkModeProps> = ({ darkMode }) => {
  const { data } = useGenres();
  return (
    <div style={{ marginRight: '100px' }}>
      <h1>Genres</h1>
      <ul>
        {data.map((genre) => (
          <li
            style={{
              display: 'flex',
              margin: '15px 0',
              alignItems: 'center',
            }}
            key={genre.id}
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
