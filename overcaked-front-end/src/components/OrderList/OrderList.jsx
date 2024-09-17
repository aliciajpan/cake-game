import { useState } from "react";
import "./OrderList.scss";
import OrderCard from "../OrderCard/OrderCard.jsx";

function OrderList({cakeArray, expireCake}) {
    return (
        <section className="orderlist">
            {cakeArray.map((cake) => {
                return (
                    <OrderCard key={cake.id} num={cake.id} icing={cake.icing} cakelayers={cake.layers} expireCake={expireCake}/>
                )
            })}
        </section>
    );
}

export default OrderList;