import { useEffect, useState } from "react";
import "./OrderCard.scss";
import TimerBar from "../TimerBar/TimerBar";
import Cake from "../Cake/Cake";

function OrderCard({num, icing, cakelayers, expireCake}) {
    useEffect(() => {
        setTimeout(() => {expireCake(num)}, (cakelayers.length * 10000))
    }, [])

    return (
        <article className="ordercard">
            <p>Order #{num}</p>
            <Cake icing={icing} cakelayers={cakelayers} size="small-cake"/>
            <TimerBar time={cakelayers.length}/>
        </article>
    );
}

export default OrderCard;