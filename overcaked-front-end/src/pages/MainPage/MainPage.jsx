import './MainPage.scss';
import OrderList from '../../components/OrderList/OrderList.jsx';
import Cake from '../../components/Cake/Cake';
import Button from '../../components/Button/Button.jsx';
import FlavourMenu from '../../components/FlavourMenu/FlavourMenu.jsx';
import { useState } from 'react';

function MainPage() {
    const [cakelayers, setCakelayers] = useState([]);
    const [icing, setIcing] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    function addCakeLayer() {
        if (cakelayers.length < 3 && icing === "") {
            setCakelayers([...cakelayers, "chocolate"]);
        }

        else {
            alert("cannot add more cake layers!");
        }
    }

    function addIcingLayer() {
        if (icing.length < 1 && cakelayers.length > 0) {
            setIcing("chocolate");
        }

        else {
            alert("too much icing!");
        }
    }

    function setSelectedFlavour(flavour) {
        if (selectedItem === "icing") {
            setIcing(flavour);
        }

        else if (selectedItem === "layer1") {
            //const tempCakeLayers = cakelayers; -> both temp and cakeLayers point to the array of cakeLayers
            const tempCakeLayers = [...cakelayers]; // -> making a new array
            tempCakeLayers[0] = flavour; // this changes array val but DOES NOT change where temp is pointing
            setCakelayers(tempCakeLayers); // thus does not trigger change here because cakeLayers was pointing there already
        }

        else if (selectedItem === "layer2") {
            const tempCakeLayers = [...cakelayers];
            tempCakeLayers[1] = flavour;
            setCakelayers(tempCakeLayers);
        }

        else if (selectedItem === "layer3") {
            const tempCakeLayers = [...cakelayers];
            tempCakeLayers[2] = flavour;
            setCakelayers(tempCakeLayers);
        }

        else {
            console.error("nothing selected");
        }
    }

    return (
        <main className='main'>
            <div className='main__orders'>
                <OrderList/>
            </div>

            <section className='main__build'>
                <Cake icing={icing} cakelayers={cakelayers} size="big-cake" setSelectedItem={setSelectedItem} selectedItem={selectedItem}/>
            </section>

            <section className='main__edit'>
                    <Button onClick={addCakeLayer} text="+ Add cake layer" sizing="game" color="brown"/>
                    <Button onClick={addIcingLayer} text="+ Add icing layer" sizing="game" color="brown"/>
                    <FlavourMenu setSelectedFlavour={setSelectedFlavour}/>
            </section>  
        </main>
    )
}

export default MainPage;