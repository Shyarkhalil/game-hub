import Dropdown from 'react-bootstrap/Dropdown';
import usePlatform from '../../hooks/usePlatform';
import './platforms.css';
interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}
const PlatformsMenu: React.FC<Props> = ({
  onSelectedPlatform,
  selectedPlatform,
}) => {
  const { data } = usePlatform();
  return (
    <div style={{ marginTop: '15px' }}>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {selectedPlatform?.name || 'Platforms'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {data.map((p) => (
            <Dropdown.Item
              key={p.id}
              onClick={() => {
                console.log(p);

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
