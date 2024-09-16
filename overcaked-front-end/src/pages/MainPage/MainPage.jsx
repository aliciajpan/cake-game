import './MainPage.scss';
import OrderList from '../../components/OrderList/OrderList.jsx';
import Cake from '../../components/Cake/Cake';
import Button from '../../components/Button/Button.jsx';
import FlavourMenu from '../../components/FlavourMenu/FlavourMenu.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage() {
    const [cakelayers, setCakelayers] = useState([]);
    const [icing, setIcing] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [cakeArray, setCakeArray] = useState([]);
    const [cakesToDisplay, setCakesToDisplay] = useState([1,2,3]);
    const [nextCakeToDisplay, setNextCakeToDisplay] = useState(4);

    async function fetchAllCakes() {
        try {
            const allCakes = await axios.post("http://localhost:8080/cakes");
            console.log(allCakes);
            setCakeArray(allCakes.data);
        }

        catch(error) {
            console.error(error);
        }
    }

    useEffect (() => {
        fetchAllCakes();
    }, [])

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

    async function submitCake() {
        try {
            const req = {
                compareIds: cakesToDisplay,
                cakeLayers: cakelayers,
                icing: icing
            }

            const matchedCake = await axios.post("http://localhost:8080/cakes/submit", req);
            if (matchedCake.data) {
                updateCakesToDisplay(matchedCake.data);
            }

            setCakelayers([]);
            setIcing("");
        }

        catch(error) {
            console.error(error);
        }
    }

    function updateCakesToDisplay(cakeToRemove) {
        const updatedCakesToDisplay = [...cakesToDisplay.filter((cakeId) => {return (cakeId !== cakeToRemove)})];
        // console.log(updatedCakesToDisplay);
        updatedCakesToDisplay.push(nextCakeToDisplay);
        setCakesToDisplay(updatedCakesToDisplay);
        setNextCakeToDisplay(nextCakeToDisplay+1);
    }

    return (
        <main className='main'>
            <div className='main__orders'>
                <OrderList cakeArray={cakeArray.filter((cake) => cakesToDisplay.includes(cake.id))}/>
            </div>

            <section className='main__build'>
                <Cake icing={icing} cakelayers={cakelayers} size="big-cake" setSelectedItem={setSelectedItem} selectedItem={selectedItem}/>
            </section>

            <section className='main__edit'>
                    <Button onClick={addCakeLayer} text="+ Add cake layer" sizing="game" color="brown"/>
                    <Button onClick={addIcingLayer} text="+ Add icing layer" sizing="game" color="brown"/>
                    <FlavourMenu setSelectedFlavour={setSelectedFlavour}/>
            </section>  

            <Button onClick={submitCake} text="submit" sizing="small" color="pink"/>
        </main>
    )
}

export default MainPage;