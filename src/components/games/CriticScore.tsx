interface CriticScoreProps {
  criticScores: number;
}
const CriticScore: React.FC<CriticScoreProps> = ({ criticScores }) => {
  const scoreColor = criticScores > 80 ? '#6fba6f' : '#d2d281';
  return (
    <div className="last-item">
      <span
        style={{
          color: scoreColor,
          borderRadius: '3px',
          backgroundColor: '#464646',
          padding: '5px',
          fontSize: '18px',
        }}
      >
        {criticScores}
      </span>
    </div>
  );
};

export default CriticScore;
