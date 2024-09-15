import './MainPage.scss';
import OrderList from '../../components/OrderList/OrderList.jsx';
import Cake from '../../components/Cake/Cake';

function MainPage() {
    return (
        <main className='main'>
            <div className='main__orders'>
                <OrderList/>
            </div>

            <section className='main__build'>
                <Cake icing="vanilla" cakelayers={["chocolate"]} size="big-cake"/>
            </section>
        </main>
    )
}

export default MainPage;