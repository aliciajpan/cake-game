import { useState } from "react";
import "./OrderList.scss";
import OrderCard from "../OrderCard/OrderCard.jsx";

function OrderList({cakeArray, expireCake, isGameOver}) {
    return (
        <section className="orderlist">
            {cakeArray.map((cake) => {
                return (
                    <OrderCard key={cake.id} num={cake.id} icing={cake.icing} cakelayers={cake.layers} expireCake={expireCake} isGameOver={isGameOver}/>
                )
            })}
        </section>
    );
}

export default OrderList;