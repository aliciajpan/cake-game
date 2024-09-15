import "./FlavourMenu.scss";
import Button from "../Button/Button";

function FlavourMenu({setSelectedFlavour}) {

    return (
        <section className="flavourmenu">
            <Button onClick={() => {setSelectedFlavour("chocolate")}} text="chocolate" sizing="game--menu" color="brown"/>
            <Button onClick={() => {setSelectedFlavour("vanilla")}} text="vanilla" sizing="game--menu" color="brown"/>
            <Button onClick={() => {setSelectedFlavour("strawberry")}} text="strawberry" sizing="game--menu" color="brown"/>
        </section>
    );
}

export default FlavourMenu;