import "./IcingLayer.scss";

function IcingLayer({flavour}) {

    return (
        <div className={`icinglayer ${flavour}`}>
            <div className="icing"></div>
            <div className="drip drip1"></div>
            <div className="drip drip2"></div>
            <div className="drip drip3"></div>
        </div>
    );
}

export default IcingLayer;