import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./GameEndModal.scss";
import happychef from "../../assets/images/happychef.png";
import sadchef from "../../assets/images/sadchef.png";

function GameEndModal({fail}) {
    const message = (fail ? "Too many customers were left waiting :(" : "You got through a day at the bakery!"); // why this not work?

    return (
        <div className="modal__wrapper">
            <article className="modal">
                <h2>{fail ? "GAME OVER" : "GREAT WORK!"}</h2>
                <p>{message}</p>
                <img className="modal__image" src={fail ? sadchef : happychef} />
                <NavLink to="/scoreboard"><Button text="See scores" sizing="small" color="brown"/></NavLink>
            </article>
        </div>
        
    );
}

export default GameEndModal;