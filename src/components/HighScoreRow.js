import React from 'react';
import moment from 'moment';

const HighScoreRow = ({ score, date }) => {
  return (
    <div className='high-score-row'>
        <span className="high-score-value">
            {score}
        </span>
        <span className="high-score-date">
            {moment(date).fromNow()}
        </span>
    </div>
  );
}

export default HighScoreRow;
