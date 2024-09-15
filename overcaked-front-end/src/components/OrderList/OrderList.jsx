import { useState } from "react";
import "./OrderList.scss";
import OrderCard from "../OrderCard/OrderCard.jsx";

function OrderList() {

    return (
        <section className="orderlist">
            <OrderCard num={1} icing="strawberry" cakelayers={["vanilla", "vanilla", "strawberry"]}/>
            <OrderCard num={2} icing="vanilla" cakelayers={["chocolate", "chocolate", "vanilla"]}/>
            <OrderCard num={3} icing="chocolate" cakelayers={["strawberry", "strawberry", "chocolate"]}/>
        </section>
    );
}

export default OrderList;