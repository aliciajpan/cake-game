import "./NameForm.scss";

function NameForm() {
    return (
        <form>
            <input className="nameform__input" name="name" type="text" placeholder="what's your name, chef?">
            </input>
        </form>
    );
}

export default NameForm;