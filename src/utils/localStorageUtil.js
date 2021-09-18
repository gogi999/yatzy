const key = 'highScores';

const readHighScoresOrEmpty = () =>{
    const highScoresStr = localStorage.getItem(key);
    let highScores = [];

    try {
        const temp = JSON.parse(highScoresStr);
        if (temp) {
            highScores = temp;
        }
    } catch (err) {
        console.log(err)
    }
    
    return highScores;
}

export const saveHighScore = (total) => {
    const highScores = readHighScoresOrEmpty();
    highScores.push([total, new Date()]);
    highScores.sort(([sc1, ...junk1], [sc2, ...junk2]) => sc2 - sc1)

    localStorage.setItem(key, JSON.stringify(highScores.slice(0, 10)));
}

export const loadHighScores = () => {
    return readHighScoresOrEmpty();
}
export const wipeHighScores = () => {
    localStorage.setItem(key, JSON.stringify([]));
}
