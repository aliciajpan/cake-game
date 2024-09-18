import './ScoreboardPage.scss';
import ScoreCard from '../../components/ScoreCard/ScoreCard';

function ScoreboardPage() {
    const colors = ["scorecard--pink", "scorecard--brown", "scorecard--cream"];

    const scores = [
        {
            "id": 0,
            "name": "test",
            "score": 100,
            "time": "2 days ago"
        },
        {
            "id": 1,
            "name": "test2",
            "score": 200,
            "time": "1 day ago"
        },
        {
            "id": 2,
            "name": "test3",
            "score": 300,
            "time": "now"
        },
        {
            "id": 3,
            "name": "test4",
            "score": 400,
            "time": "1 hour ago"
        }
    ];

    return (
        <section className='menu'>
            <h1>Scores</h1>
            {scores.map((scoreObj) => {
                return (<ScoreCard scoreObj={scoreObj} color={colors[(scoreObj.id) % colors.length]}/>)
            })}
        </section>
    )
}

export default ScoreboardPage;