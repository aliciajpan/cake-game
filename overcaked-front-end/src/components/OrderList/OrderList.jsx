import { useState } from "react";
import "./OrderList.scss";
import OrderCard from "../OrderCard/OrderCard.jsx";

function OrderList({cakeArray}) {
    console.log(cakeArray);
    return (
        <section className="orderlist">
            {cakeArray.map((cake) => {
                return (
                    <OrderCard key={cake.id} num={cake.id} icing={cake.icing} cakelayers={cake.layers}/>
                )
                
            })}
        </section>
    );
}

export default OrderList;