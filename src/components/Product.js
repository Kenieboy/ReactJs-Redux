import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Product() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  console.log(products);

  const handleClick = (item) => {
    dispatch(add(item));
  };
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button
              onClick={() => {
                handleClick(product);
              }}
            >
              Add to basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
