import React from 'react';
//import 'semantic-ui-css/semantic.min.css';

const Die = ({ die, clickHandler, disabled }) => {
    return (
        <button
            className={"die" + (die.isLocked ? " locked" : " unlocked")}
            onClick={clickHandler}
            disabled={disabled}
        >
            {die.value}
        </button>
    );
}

export default Die;
