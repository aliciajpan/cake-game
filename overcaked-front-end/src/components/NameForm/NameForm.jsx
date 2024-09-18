import Button from "../Button/Button";
import "./NameForm.scss";

function NameForm() {
    function submitName(event) {
        event.preventDefault();
        const saveThisName = event.target.name.value.trim();

        localStorage.setItem("overcakedSavedName", saveThisName);
    }

    return (
        <form className="nameform" onSubmit={submitName}>
            <input className="nameform__input" name="name" id="name" type="text" placeholder="what's your name, chef?">
            </input>
            <Button text="Submit" sizing="form" color="brown"/>
                {/* form sizing does not actually exist */}
        </form>
    );
}

export default NameForm;