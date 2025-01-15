import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../utils/cartSlice";

function CartCard({ item }) {
  const { id, title, price, image, category, quantity } = item;
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
  };
  const handleDelete = () => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div className="cart-item-container">
        <img className="product-logo" src={image} alt="product-logo" />
        <div>
          <div>Title: {title}</div>
          <div>Price: {price * quantity}</div>
          <div>Category: {category}</div>
        </div>
        <div>
          <button onClick={handleIncrement}>+</button>
          <span>{quantity}</span>
          <button onClick={handleDecrement}>-</button>
        </div>
        <div>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
