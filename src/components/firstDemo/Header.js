import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => {
    const quantity = parseInt(item.quantity);
    return acc + quantity;
  }, 0);

  return (
    <div className="header-container">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="header-logo">Shopping Cart Application</div>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="header-cart">Cart - ({totalQuantity} items)</div>
      </Link>
    </div>
  );
}

export default Header;
