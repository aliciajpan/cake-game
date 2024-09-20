import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import "./NameForm.scss";

function NameForm() {
    const navigate = useNavigate();

    // this was for if onChange and value instead of defaultValue
    // const [formInput, setFormInput] = useState("");

    // useEffect(() => {
    //     const storedName = localStorage.getItem("overcakedSavedName");
    //     if (storedName) {
    //         setFormInput(storedName);
    //     }
    // }, []);

    // function onChange (event) {
    //     let saveThis = event.target.name.value;
    //     setFormInput(saveThis);
    //     localStorage.setItem("overcakedSavedName", saveThis)
    // }

    const nameInputRef = useRef(null);

    useEffect(() => {
        const storedName = localStorage.getItem("overcakedSavedName");
        if (storedName) {
            nameInputRef.current.value = storedName;
        }
    }, [])

    function handleSubmit() {
        localStorage.setItem("overcakedSavedName", nameInputRef.current.value);
        navigate("/play");
    }

    // function submitName(event) {
    //     event.preventDefault();
    //     const saveThisName = event.target.name.value.trim();

    //     // TODO: DEAL W LOGIC HERE
    //     if (localStorage.getItem("overcakedSavedName")) {
    //         navigate("/play");
    //         localStorage.setItem("overcakedSavedName", localStorage.getItem("overcakedSavedName"));
    //     }

    //     if (!saveThisName && !localStorage.getItem("overcakedSavedName")) {
    //         const nameInfo = confirm("Names are used for the scoreboard. Do you want to remain anonymous?");
    //         if (nameInfo) {
    //             localStorage.setItem("overcakedSavedName", saveThisName);
    //             navigate("/play");
    //         }
    //     }

    //     else {
    //         localStorage.setItem("overcakedSavedName", saveThisName);
    //         navigate("/play");
    //     }
    // }

    return (
        <>
        <form className="nameform" /*onSubmit={submitName}*/>
            <input ref={nameInputRef}
                className="nameform__input" 
                name="name" 
                id="name" 
                type="text"
                //defaultValue={formInput} 
                // value={formInput}
                placeholder={/*localStorage.getItem("overcakedSavedName") || */"what's your name, chef?"}
                // onChange={onChange}
            ></input>
            {/* <Button text="Submit" sizing="form" color="brown"/> */}
                {/* form sizing does not actually exist */}
            <Button text="play" sizing="big" color="pink" onClick={handleSubmit}/>
        </form>
        {/*<NavLink to="/play"><Button text="play" sizing="big" color="pink"/></NavLink>*/}
        </>
    );
}

export default NameForm;