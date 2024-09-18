import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./GameEndModal.scss";

function GameEndModal({fail}) {
    const message = (fail ? "Too many customers were left waiting :(" : "You got through a day at the bakery!"); // why this not work?

    return (
        <div className="modal__wrapper">
            <article className="modal">
                <h2>GAME OVER</h2>
                <p>{message}</p>
                <NavLink to="/scoreboard"><Button text="See scores" sizing="small" color="brown"/></NavLink>
            </article>
        </div>
        
    );
}

export default GameEndModal;