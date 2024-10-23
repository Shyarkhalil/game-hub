import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si'; // For Nintendo from react-icons/si (simple icons)
import CriticScore from './CriticScore';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface GamePlatformIconsProps {
  parentPlatform: { platform: Platform }[];
  criticScores: number;
}
const GamePlatformIcons: React.FC<GamePlatformIconsProps> = ({
  parentPlatform,
  criticScores,
}) => {
  const getPlatformIcon = (slug: string) => {
    switch (slug) {
      case 'pc':
        return <FaWindows />;
      case 'playstation':
        return <FaPlaystation />;
      case 'xbox':
        return <FaXbox />;
      case 'nintendo':
        return <SiNintendo />;
      case 'apple':
        return <FaApple />;
      case 'linux':
        return <FaLinux />;
      case 'android':
        return <FaAndroid />;
      case 'ios':
        return <MdPhoneIphone />;
      default:
        return null;
    }
  };

  // Add a check for undefined or empty array
  if (!parentPlatform || !parentPlatform.length) {
    return null; // Or return a fallback UI
  }
  return (
    <div className="gamePlatformIcons">
      {parentPlatform.map(({ platform }) => (
        <span key={platform.id}>{getPlatformIcon(platform.slug)}</span>
      ))}

      <CriticScore criticScores={criticScores} />
    </div>
  );
};

export default GamePlatformIcons;
