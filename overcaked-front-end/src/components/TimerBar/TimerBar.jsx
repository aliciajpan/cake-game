import { useState } from "react";
import "./TimerBar.scss";

function TimerBar({time}) {

    return (
        <div className="timerbar">
            <div className={`timerbar__remaining timerbar__remaining--${time}`}></div>
        </div>
    );
}

export default TimerBar;