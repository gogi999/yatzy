import React from 'react';

const StartGame = ({ startGameFn }) => {
  return (
    <div className="start-game-panel">
        <button onClick={startGameFn}>Start Game</button>
    </div>
  );
}

export default StartGame;
