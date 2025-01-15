import React, { useEffect, useState } from "react";
import { SHOPPING_PRODUCTS_LIST_API } from "../../utils/Constants";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    const quantityFieldAddedProduct = { ...product, quantity: 1 };
    dispatch(addItem(quantityFieldAddedProduct));
  };

  const fetchProductData = async () => {
    const response = await fetch(SHOPPING_PRODUCTS_LIST_API);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className="product-list-container">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
