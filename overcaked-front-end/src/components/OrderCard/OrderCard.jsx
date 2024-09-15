import { useState } from "react";
import "./OrderCard.scss";
import TimerBar from "../TimerBar/TimerBar";
import Cake from "../Cake/Cake";

function OrderCard({num}) {

    return (
        <article className="ordercard">
            <p>Order #{num}</p>
            <Cake/>
            <TimerBar/>
        </article>
    );
}

export default OrderCard;