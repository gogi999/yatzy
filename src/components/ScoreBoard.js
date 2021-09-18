import React from 'react';
import './Yatzy.css';
import DebugPanel from './DebugPanel';
import ScoreLine from './ScoreLine';
import { scoresKeysUpper, scoresKeysLower} from '../utils/scoring';

const debugOn = false;

const ScoreBoard = ({ 
    scores, suggestedScores, totals, acceptSuggestion, 
    hasGameStarted, hasTurnStarted, diceValues 
}) => {
    const { topSum, bonus, grandTotal } = totals;    

    return (
       <div className="scoreboard">
            {debugOn && <DebugPanel />}
            {scoresKeysUpper().map(k => (
                    <ScoreLine
                        key={k}
                        name={k}
                        value={scores[k]}
                        hasGameStarted={hasGameStarted}
                        hasTurnStarted={hasTurnStarted}
                        suggestedValue={suggestedScores[k]}
                        acceptSuggestion={acceptSuggestion}
                        diceValues={diceValues}
                    />))
            }
            <div className="score-line total-line overline">
                <span className="label">Sum</span>
                <span className="value">{topSum}</span>
            </div>
            <div className="score-line total-line  underline">
                <span className="label">Bonus</span>
                <span className="value">{bonus}</span>
            </div>
            {scoresKeysLower().map(k => (
                    <ScoreLine
                        key={k}
                        name={k}
                        value={scores[k]}
                        hasGameStarted={hasGameStarted}
                        hasTurnStarted={hasTurnStarted}
                        suggestedValue={suggestedScores[k]}
                        acceptSuggestion={acceptSuggestion}
                        diceValues={diceValues}
                    />))
            }
            <div className="score-line total-line underline">
                <span className="label">Total</span>
                <span className="value">{grandTotal}</span>
            </div>
        </div>
    );
}

export default ScoreBoard;
