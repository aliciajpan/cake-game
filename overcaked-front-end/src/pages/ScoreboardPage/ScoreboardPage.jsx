import './ScoreboardPage.scss';
import ScoreCard from '../../components/ScoreCard/ScoreCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import homeIcon from '../../assets/icons/home.png';
import { NavLink } from 'react-router-dom';

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
                <div className='scoreboard__header'>
                    <NavLink className="scoreboard__icon-wrapper" to="/"><img className='scoreboard__icon' src={homeIcon}/></NavLink>
                    <h1>Scores</h1>
                </div>
                <br></br>
                <h3>No scores to display yet!</h3>
            </section>
        )
    }

    return (
        <section className='scoreboard'>
            <div className='scoreboard__header'>
                <NavLink className="scoreboard__icon-wrapper" to="/">
                    <img className='scoreboard__icon' src={homeIcon}/>
                </NavLink>
                <h1>Scores</h1>
            </div>
            {scoresArray.map((scoreObj, index) => {
                return (<ScoreCard key={index} scoreObj={scoreObj} color={colors[(index) % colors.length]}/>)
            })}
        </section>
    )
}

export default ScoreboardPage;