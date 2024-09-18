import './MenuPage.scss';
import logo from '../../assets/logos/logo.png';
import Button from '../../components/Button/Button';
import NameForm from '../../components/NameForm/NameForm';
import OrderCard from '../../components/OrderCard/OrderCard';
import Cake from '../../components/Cake/Cake';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function MenuPage() {
    const [playerName, setPlayerName] = useState("");
    
    return (
        <section className='menu'>
            <img className='menu__logo' src={logo} alt="Overcaked logo" />
            <NameForm />
            <NavLink to="/play"><Button text="play" sizing="big" color="pink"/></NavLink>
            <NavLink to="/scoreboard"><Button text="scoreboard" sizing="small" color="brown"/></NavLink>
            <NavLink to="/howtoplay"><Button text="tutorial*" sizing="small" color="brown"/></NavLink>
        </section>
    )
}

export default MenuPage;