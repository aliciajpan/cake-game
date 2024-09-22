import './TutorialPage.scss';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.png';
import folder from '../../assets/images/tutorialGIF.gif';
import Footer from '../../components/Footer/Footer';

function TutorialPage() {
    return (
        <section className='tutorial'>
            <div className='tutorial__header'>
                <NavLink className="tutorial__icon-wrapper" to="/">
                    <img className='tutorial__icon' src={homeIcon}/>
                </NavLink>
                <h1>How to Play</h1>
            </div>

            <section className='tutorial-module'>
                <div className="tutorial-module__bkgd-container">
                    <img className="tutorial-module__bkgd" src={folder} />
                </div>
            </section>

            
            <Footer/>
        </section>
    )
}

export default TutorialPage;