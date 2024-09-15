import "./FlavourMenu.scss";
import Button from "../Button/Button";

function FlavourMenu({selectedItems}) {

    return (
        <section className="flavourmenu">
            <Button text="chocolate" sizing="game--menu" color="brown"/>
            <Button text="vanilla" sizing="game--menu" color="brown"/>
            <Button text="strawberry" sizing="game--menu" color="brown"/>
        </section>
    );
}

export default FlavourMenu;