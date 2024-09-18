import { readFile, writeFile } from '../utils/json.js';

let nextId = 0;

function postScore (req, res) {
    const {playerName, playerScore} = req.body;

    if (!playerName || !playerScore) {
        console.log(playerName, playerScore);
        return res.status(400).json({
            message: "Name or score missing",
        });
    }

    try {
        const allScores = readFile('scores.json');

        const newScoreItem = {
            id: nextId,
            name: playerName,
            score: playerScore,
            time: (new Date()).getTime()
        }

        nextId += 1;

        allScores.push(newScoreItem);
        writeFile("scores.json", allScores);
        res.json(newScoreItem);
    } 
        
    catch (error) {
        res.status(500).json({
            message: "Unable to add score data",
            error:error.toString()
        });
    }
};

export {postScore};