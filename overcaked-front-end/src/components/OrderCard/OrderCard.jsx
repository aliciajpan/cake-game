import { useEffect, useState } from "react";
import "./OrderCard.scss";
import TimerBar from "../TimerBar/TimerBar";
import Cake from "../Cake/Cake";

function OrderCard({num, icing, cakelayers, expireCake}) {
    useEffect(() => {
        const timer = setTimeout(() => {expireCake(num)}, (cakelayers.length * 15000));
        return (() => {clearTimeout(timer)}) // cleaned up when ordercard is gone from display (no longer expires if already submitted)
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