import { useEffect, useState } from "react";
import "./OrderCard.scss";
import TimerBar from "../TimerBar/TimerBar";
import Cake from "../Cake/Cake";

function OrderCard({num, icing, cakelayers, expireCake, isGameOver, tutorialModalOpen}) {
    const msPerLayer = 15000;
    useEffect(() => {
        const timer = setTimeout(() => {expireCake(num)}, (cakelayers.length * msPerLayer));
        return (() => {clearTimeout(timer)})
    }, [])

    // console.log(num, icing, cakelayers, expireCake, isGameOver);
    return (
        <article className="ordercard">
            <p>Order #{num}</p>
            <Cake icing={icing} cakelayers={cakelayers} size="small-cake"/>
            <TimerBar time={cakelayers.length} isGameOver={isGameOver} tutorialModalOpen={tutorialModalOpen}/>
        </article>
    );
}

export default OrderCard;