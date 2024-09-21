import { useState } from "react";
import "./OrderList.scss";
import OrderCard from "../OrderCard/OrderCard.jsx";

function OrderList({filteredCakeArray, expireCake, isGameOver}) {
    return (
        <section className="orderlist">
            {filteredCakeArray.map((cake) => {
                return (
                    <OrderCard 
                        key={cake.id} 
                        num={cake.id} 
                        icing={cake.icing} 
                        cakelayers={cake.layers} 
                        expireCake={expireCake} 
                        isGameOver={isGameOver}
                    />
                )
            })}
        </section>
    );
}

export default OrderList;