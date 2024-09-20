import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import "./NameForm.scss";

function NameForm() {
    const navigate = useNavigate();
    const nameInputRef = useRef(null); // handles input default value

    useEffect(() => { // set preloaded value once on mount
        const storedName = localStorage.getItem("overcakedSavedName");
        if (storedName) {
            nameInputRef.current.value = storedName;
        }
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        const nameInputted = nameInputRef.current.value.trim();
        
        if (!nameInputted) {
            const confirm = window.confirm("Names are used for the scoreboard. Click OK to remain anonymous");
            
            if (!confirm) {
                return;
            } 
        }

        localStorage.setItem("overcakedSavedName", nameInputted);
        navigate("/play");
    }

    return (
        <>
            <form className="nameform">
                <input 
                    ref={nameInputRef}
                    className="nameform__input" 
                    name="name" 
                    id="name" 
                    type="text"
                    placeholder={"what's your name, chef?"}
                ></input>
                <Button text="play" sizing="big" color="pink" onClick={handleSubmit}/>
            </form>
        </>
    );
}

export default NameForm;