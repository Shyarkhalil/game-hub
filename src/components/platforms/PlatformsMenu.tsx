import Dropdown from 'react-bootstrap/Dropdown';
import { GameQuery } from '../../App';
import usePlatform from '../../hooks/usePlatform';
import './platforms.css';

interface Props {
  gameQuery: GameQuery;
  onSelectedPlatform: (platform: GameQuery['platform']) => void;
}
const PlatformsMenu: React.FC<Props> = ({ onSelectedPlatform, gameQuery }) => {
  const { data } = usePlatform();
  return (
    <div style={{ marginTop: '15px' }}>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {gameQuery.platform?.name || 'Platforms'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {data.map((p) => (
            <Dropdown.Item
              key={p.id}
              onClick={() => {
                onSelectedPlatform(p);
              }}
              className="dropdown-item"
            >
              {p.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default PlatformsMenu;
