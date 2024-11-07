import Dropdown from 'react-bootstrap/Dropdown';
import usePlatform from '../../hooks/usePlatform';
import './platforms.css';
const PlatformsMenu = () => {
  const { data } = usePlatform();
  return (
    <div style={{ marginTop: '15px' }}>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Platforms
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {data.map((p) => (
            <Dropdown.Item
              key={p.id}
              onClick={() => console.log(p.name)}
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
