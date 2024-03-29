import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);

  console.log(cartProducts);
  return (
    <div>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Empty Cart
      </button>
      <div>
        <h1>Cart</h1>
      </div>
      <div>
        {cartProducts.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.qty}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
