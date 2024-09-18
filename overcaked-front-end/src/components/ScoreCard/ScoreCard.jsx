import "./ScoreCard.scss";
import dynamicTimestamp from "../../utils/dynamic-timestamp";

function ScoreCard({scoreObj, color}) {
    // console.log(color);
    return (
        <article className={`scorecard ${color}`}>
            <div>
                {scoreObj.name}
            </div>

            <div>
                {scoreObj.score}
            </div>

            <div>
                {dynamicTimestamp(scoreObj.time)}
            </div>
        </article>
    );
}

export default ScoreCard;
