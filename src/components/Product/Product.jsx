import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  const handleCart = props.handleCart;
  return (
    <div className="product-card">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price:${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings} stars</p>
      </div>
      <button onClick={() => handleCart(props.product)} className="btn-cart">
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
