import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let quantity = 0;
  let totalPrice = 0;
  let totalShipping = 0;
  let tax = 0;
  let total = 0;
  for (const product of cart) {
    if (product.quantity == 0) {
      product.quantity = 1;
    }
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * quantity;
    totalShipping = totalShipping + product.shipping;
    tax = (totalPrice * 7) / 100;
    total = totalPrice + totalShipping + tax;
  }
  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <p>Selected items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${total.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
