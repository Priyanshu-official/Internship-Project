import React from 'react';
import "../checkout/checkout.css";
import Subtotal from "./Subtotal"

export default function checkout() {
    return (
        <div className="checkout">
            <div className="checkoutLeft">
                <div>
                    <h2 className="checkoutTitle"> Your Cart is Empty</h2>
                    <p>You have no Itme in your Cart</p>
                </div>
            </div>
            <div className="checkoutRight">
                <Subtotal />
            </div>
        </div>
    )
}
