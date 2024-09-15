import CakeLayer from "../CakeLayer/CakeLayer";
import IcingLayer from "../IcingLayer/IcingLayer";
import "./Cake.scss";

function Cake({icing, cakelayers, size, selectedItem, setSelectedItem}) {
    return (
        <article className={`cake ${size}`}>
            <div className="plate"></div>
            <CakeLayer onClick={() => {setSelectedItem("layer1")}} isSelected={selectedItem==="layer1"} layer="1" flavour={cakelayers[0]}/>
            <CakeLayer onClick={() => {setSelectedItem("layer2")}} isSelected={selectedItem==="layer2"} layer="2" flavour={cakelayers[1]}/>
            <CakeLayer onClick={() => {setSelectedItem("layer3")}} isSelected={selectedItem==="layer3"} layer="3" flavour={cakelayers[2]}/>
            <IcingLayer onClick={() => {setSelectedItem("icing")}} isSelected={selectedItem==="icing"} flavour={icing} height={cakelayers.length}/>
        </article>
    );
}

export default Cake;