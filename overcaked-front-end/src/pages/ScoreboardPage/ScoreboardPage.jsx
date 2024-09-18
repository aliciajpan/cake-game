import './ScoreboardPage.scss';
import ScoreCard from '../../components/ScoreCard/ScoreCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ScoreboardPage() {
    const colors = ["scorecard--pink", "scorecard--brown", "scorecard--cream"];
    const [scoresArray, setScoresArray] = useState([]);

    async function fetchAllScores() {
        try {
            const allScores = await axios.get("http://localhost:8080/scores");
            allScores.data.sort((a,b) => b.score - a.score);
            setScoresArray(allScores.data);
        }

        catch(error) {
            console.error(error);
        }
    }

    useEffect (() => {
        fetchAllScores();
    }, [])

    if (scoresArray.length === 0) {
        return (
            <section className='scoreboard'>
                <h1>Scores</h1>
                <br></br>
                <h3>No scores to display yet!</h3>
            </section>
        )
    }

    return (
        <section className='scoreboard'>
            <h1>Scores</h1>
            {scoresArray.map((scoreObj, index) => {
                return (<ScoreCard key={index} scoreObj={scoreObj} color={colors[(index) % colors.length]}/>)
            })}
        </section>
    )
}

export default ScoreboardPage;