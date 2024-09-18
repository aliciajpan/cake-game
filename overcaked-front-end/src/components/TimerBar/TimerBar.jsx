import { useState } from "react";
import "./TimerBar.scss";

function TimerBar({time, isGameOver}) {

    return (
        <div className="timerbar">
            <div className={`timerbar__remaining timerbar__remaining--${time} ${isGameOver ? "pause-animation" : ""}`}></div>
        </div>
    );
}

export default TimerBar;