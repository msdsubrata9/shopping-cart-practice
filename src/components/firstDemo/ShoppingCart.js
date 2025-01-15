import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import CartList from "./CartList";
import { Route, Routes } from "react-router-dom";

function ShoppingCart() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </div>
  );
}

export default ShoppingCart;
