import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./NameForm.scss";

function NameForm() {
    const navigate = useNavigate();

    function submitName(event) {
        event.preventDefault();
        const saveThisName = event.target.name.value.trim();

        if (!saveThisName) {
            const nameInfo = confirm("Names are used for the scoreboard. Do you want to remain anonymous?");
            if (nameInfo) {
                localStorage.setItem("overcakedSavedName", saveThisName);
                navigate("/play");
            }
        }

        else {
            localStorage.setItem("overcakedSavedName", saveThisName);
            navigate("/play");
        }
    }

    return (
        <>
        <form className="nameform" onSubmit={submitName}>
            <input 
                className="nameform__input" 
                name="name" 
                id="name" 
                type="text" 
                placeholder={localStorage.getItem("overcakedSavedName") || "what's your name, chef?"}
            ></input>
            {/* <Button text="Submit" sizing="form" color="brown"/> */}
                {/* form sizing does not actually exist */}
            <Button text="play" sizing="big" color="pink"/>
        </form>
        {/*<NavLink to="/play"><Button text="play" sizing="big" color="pink"/></NavLink>*/}
        </>
    );
}

export default NameForm;