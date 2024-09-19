import Button from "../Button/Button";
import "./TutorialModal.scss";
import folder from '../../assets/images/tutorialfolder.png';

function TutorialModal({closeModal}) {
    function closeTutModal() {
        closeModal();
    }
    return (
        <div className="tutmodal__wrapper">
            <article className="tutmodal">
                <img className="tutmodal__image" src={folder} />
                <Button onClick={closeTutModal} text="Close" sizing="game" color="brown"/>
            </article>
        </div>
        
    );
}

export default TutorialModal;