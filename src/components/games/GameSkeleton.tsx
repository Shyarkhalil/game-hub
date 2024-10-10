import React from 'react';
import './games.css';

interface GamesSkeletonProps {
  count: number; // Number of skeletons to render
}

const GamesSkeleton: React.FC<GamesSkeletonProps> = ({ count }) => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton">
          <div className="skeleton-photo"></div>
          <div className="skeleton-title"></div>
        </div>
      ))}
    </div>
  );
};

export default GamesSkeleton;
