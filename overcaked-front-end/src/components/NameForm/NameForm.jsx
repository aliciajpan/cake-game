import "./NameForm.scss";

function NameForm() {
    return (
        <form>
            <input className="nameform__input" name="name" type="text" placeholder="what is your chef name?">
            </input>
        </form>
    );
}

export default NameForm;