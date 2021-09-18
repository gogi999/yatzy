import React from 'react';
import HighScoreRow from './HighScoreRow';

const debugOn = false;

const HighScoresTable = ({ 
    highScores, saveHighScoreNow, wipeHighScores 
}) => {
  return (
    <div className="high-scores-table">
      <h2>High Scores</h2>
      {highScores.map(([score, date], i) => 
        <HighScoreRow 
          key={i}
          score={score}
          date={date}
        />
      )}
      {debugOn && (
        <div className="high-scores-controls">
          <button onClick={saveHighScoreNow}>
            Save High Score
            </button>
          <button onClick={wipeHighScores}>
            Wipe All High Score Data
          </button>
        </div>
      )}
    </div>
  );
}

export default HighScoresTable;
