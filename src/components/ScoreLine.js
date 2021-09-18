import React from 'react'

const ScoreLine = ({
    name, value, suggestedValue, acceptSuggestion, 
    hasGameStarted, hasTurnStarted, diceValues
}) => {
    const fixed = value !== null;
    const unClickable = !hasGameStarted || !hasTurnStarted || fixed;
    const suggestedValueOrBlank = hasTurnStarted && suggestedValue > 0 ? suggestedValue : '';

    return (
        <div className="score-line">
            <span className="label">{name}</span>
            <span
                className={fixed ? "value" : "suggested-value"}
                onClick={() => unClickable ? null : acceptSuggestion(name, suggestedValue, diceValues)}
            >
                {hasGameStarted 
                    ? (fixed ? value : suggestedValueOrBlank) 
                    : null
                }
            </span>
        </div>
    );
}

export default ScoreLine;
