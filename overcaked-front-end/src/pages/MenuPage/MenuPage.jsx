import './MenuPage.scss';
import logo from '../../assets/logos/logo.png';
import Button from '../../components/Button/Button';
import NameForm from '../../components/NameForm/NameForm';
import whisk from '../../assets/images/whisk.png';
import folder from '../../assets/images/folder.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function MenuPage() {
    const [playerName, setPlayerName] = useState("");
    
    return (
        <div className='menu__wrapper'>
            <section className='menu'>
                <NavLink to="/howtoplay"><img className="menu__image menu__image--folder" src={folder}/></NavLink>
                <img className='menu__logo' src={logo} alt="Overcaked logo" />
                <NameForm />
                {/* <NavLink to="/play"><Button text="play" sizing="big" color="pink"/></NavLink> */}
                <NavLink to="/scoreboard"><Button text="scoreboard" sizing="small" color="brown"/></NavLink>
                <img className="menu__image menu__image--whisk" src={whisk}/>
            </section>
        </div>
    )
}

export default MenuPage;