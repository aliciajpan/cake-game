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
            setScoresArray(allScores.data);
        }

        catch(error) {
            console.error(error);
        }
    }

    useEffect (() => {
        fetchAllScores();
    }, [])

    return (
        <section className='menu'>
            <h1>Scores</h1>
            {scoresArray.map((scoreObj) => {
                return (<ScoreCard key={scoreObj.id} scoreObj={scoreObj} color={colors[(scoreObj.id) % colors.length]}/>)
            })}
        </section>
    )
}

export default ScoreboardPage;