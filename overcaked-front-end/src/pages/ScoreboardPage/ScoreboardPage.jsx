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

    // const scores = [
    //     {
    //         "id": 0,
    //         "name": "test",
    //         "score": 100,
    //         "time": "2 days ago"
    //     },
    //     {
    //         "id": 1,
    //         "name": "test2",
    //         "score": 200,
    //         "time": "1 day ago"
    //     },
    //     {
    //         "id": 2,
    //         "name": "test3",
    //         "score": 300,
    //         "time": "now"
    //     },
    //     {
    //         "id": 3,
    //         "name": "test4",
    //         "score": 400,
    //         "time": "1 hour ago"
    //     }
    // ];

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