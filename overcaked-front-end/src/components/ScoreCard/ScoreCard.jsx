import { useState } from "react";
import "./ScoreCard.scss";

function ScoreCard({scoreObj, color}) {
    console.log(color);
    return (
        <article className={`scorecard ${color}`}>
            <div>
                {scoreObj.name}
            </div>

            <div>
                {scoreObj.score}
            </div>

            <div>
                {scoreObj.time}
            </div>
        </article>
    );
}

export default ScoreCard;