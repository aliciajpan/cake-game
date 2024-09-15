import './MainPage.scss';
import logo from '../../assets/logos/logo.png';
import Button from '../../components/Button/Button';
import NameForm from '../../components/NameForm/NameForm';
import OrderCard from '../../components/OrderCard/OrderCard';
import Cake from '../../components/Cake/Cake';


function MainPage() {
    return (
        <div className='menu__orders'>
            <OrderCard num={1}/>
            <OrderCard num={2}/>
            <OrderCard num={3}/>
        </div>
    )
}

export default MainPage;