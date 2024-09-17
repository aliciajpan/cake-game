import './MainPage.scss';
import OrderList from '../../components/OrderList/OrderList.jsx';
import Cake from '../../components/Cake/Cake';
import Button from '../../components/Button/Button.jsx';
import FlavourMenu from '../../components/FlavourMenu/FlavourMenu.jsx';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import submitIcon from '../../assets/icons/checkmark.png';
import trashIcon from '../../assets/icons/trash.png';

function MainPage() {
    const [cakelayers, setCakelayers] = useState([]);
    const [icing, setIcing] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [cakeArray, setCakeArray] = useState([]);
    const [cakesToDisplay, setCakesToDisplay] = useState([1,2,3]);
    const [nextCakeToDisplay, setNextCakeToDisplay] = useState(4);
    const [score, setScore] = useState(0);

    const cakesToDisplayRef = useRef('');
    const nextCakeToDisplayRef = useRef('');

    useEffect(() => {
        cakesToDisplayRef.current = cakesToDisplay;
    }, [cakesToDisplay])

    useEffect(() => {
        nextCakeToDisplayRef.current = nextCakeToDisplay;
    }, [nextCakeToDisplay])

    async function fetchAllCakes() {
        try {
            const allCakes = await axios.post("http://localhost:8080/cakes");
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
            setCakelayers([...cakelayers, "vanilla"]);
        }

        else {
            alert("cannot add more cake layers!");
        }
    }

    function addIcingLayer() {
        if (icing.length < 1 && cakelayers.length > 0) {
            setIcing("vanilla");
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
                setScore(score+1);
            }

            setCakelayers([]);
            setIcing("");
        }

        catch(error) {
            console.error(error);
        }
    }

    function updateCakesToDisplay(cakeToRemove) {
        const updatedCakesToDisplay = [...cakesToDisplayRef.current.filter((cakeId) => {return (cakeId !== cakeToRemove)})];
        // const updatedCakesToDisplay = [...cakesToDisplay].filter((cakeId) => {return (cakeId !== cakeToRemove)});
        updatedCakesToDisplay.push(nextCakeToDisplayRef.current);
        setCakesToDisplay(updatedCakesToDisplay);
        setNextCakeToDisplay(nextCakeToDisplayRef.current+1);
        console.log(updatedCakesToDisplay);
    }

    function expireCake(expiredId) {
        updateCakesToDisplay(expiredId);
        console.log("expired", expiredId);
        console.log("NEXT", nextCakeToDisplayRef.current);
    }

    function trashCake() {
        setCakelayers([]);
        setIcing("");
    }

    return (
        <main className='main'>
            <div className='main__orders'>
                <OrderList cakeArray={cakeArray.filter((cake) => cakesToDisplay.includes(cake.id))} expireCake={expireCake}/>
            </div>

            <section className='main__build'>                
                <Cake icing={icing} cakelayers={cakelayers} size="big-cake" setSelectedItem={setSelectedItem} selectedItem={selectedItem}/>
            </section>

            <section className='main__edit'>
                <h2>score: {score}</h2>
                <h3>hangry customers: #/10</h3>
                <Button onClick={addCakeLayer} text="+ Add cake layer" sizing="game" color="brown"/>
                <Button onClick={addIcingLayer} text="+ Add icing layer" sizing="game" color="brown"/>
                <FlavourMenu setSelectedFlavour={setSelectedFlavour}/>
                <div className='main__icon-wrapper'>
                    <img className='main__icon' onClick={submitCake} src={submitIcon}/>
                </div>
            </section>  

            {/* <Button onClick={submitCake} text="submit" sizing="small" color="pink"/> */}
            <div className='main__icon-wrapper'>
                    <img onClick={trashCake} className='main__icon' src={trashIcon}/>
            </div>
        </main>
    )
}

export default MainPage;