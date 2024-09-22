import './TutorialPage.scss';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.png';
import folder from '../../assets/images/tutorialfolder.png';
import Footer from '../../components/Footer/Footer';

function TutorialPage() {
    return (
        <section className='scoreboard'>
            <div className='scoreboard__header'>
                <NavLink className="scoreboard__icon-wrapper" to="/">
                    <img className='scoreboard__icon' src={homeIcon}/>
                </NavLink>
                <h1>How to Play</h1>
            </div>

            <section className='tutorial'>
                <div className="tutorial__bkgd-container">
                    <img className="tutorial__bkgd" src={folder} />
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default TutorialPage;