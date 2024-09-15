import CakeLayer from "../CakeLayer/CakeLayer";
import IcingLayer from "../IcingLayer/IcingLayer";
import "./Cake.scss";

function Cake({icing, cakelayers, size}) {
    return (
        <article className={`cake ${size}`}>
            <div className="plate"></div>
            <CakeLayer layer="1" flavour={cakelayers[0]}/>
            <CakeLayer layer="2" flavour={cakelayers[1]}/>
            <CakeLayer layer="3" flavour={cakelayers[2]}/>
            <IcingLayer flavour={icing}/>
        </article>
    );
}

export default Cake;