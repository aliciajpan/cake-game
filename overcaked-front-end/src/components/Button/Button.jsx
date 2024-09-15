import { useState } from "react";
import "./Button.scss";

function Button({text, sizing, color, onClick}) {

    return (
        <button className={`button ${sizing} ${color}`} onClick={onClick}>
            <div>{text}</div>
        </button>
    );
}

export default Button;