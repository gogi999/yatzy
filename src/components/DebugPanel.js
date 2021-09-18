import React from 'react';

const DebugPanel = ({ hasTurnStarted, hasGameStarted }) => {
  return (
    <>
        <div>
          {hasTurnStarted ? "turn started" : "turn not started"}
        </div>
        <div>
          {hasGameStarted ? "game started" : "game not started"}
        </div>
    </>
  );
}

export default DebugPanel;
