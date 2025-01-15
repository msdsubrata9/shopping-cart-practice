import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

function CartList() {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity) || 1;
    return acc + itemPrice * itemQuantity;
  }, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cartItems.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default CartList;
