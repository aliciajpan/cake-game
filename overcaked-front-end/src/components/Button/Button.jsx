import { useState } from "react";
import "./Button.scss";

function Button({text, sizing, color}) {

    return (
        <button className={`button ${sizing} ${color}`}>
            <div>{text}</div>
        </button>
    );
}

export default Button;