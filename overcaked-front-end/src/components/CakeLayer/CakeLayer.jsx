import "./CakeLayer.scss";

function CakeLayer({layer, flavour}) {

    return (
        <div className={`layer layer-${layer} ${flavour}`}></div>
    );
}

export default CakeLayer;