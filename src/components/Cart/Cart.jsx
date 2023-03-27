import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let tax = 0;
  let total = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
    tax = (totalPrice * 7) / 100;
    total = totalPrice + totalShipping + tax;
  }
  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <p>Selected items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${total.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
