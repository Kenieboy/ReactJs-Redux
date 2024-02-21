import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../store/cartSlice";

function NavBar() {
  const cartProducts = useSelector((state) => state.cart);
  const totalPrice = useSelector(selectTotalPrice);

  const totalQty = cartProducts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qty,
    0
  );

  console.log(cartProducts);
  return (
    <div>
      <nav className="navigation">
        <div className="main-nav">
          <Link to="/">LOGO</Link>
          <ul>
            <li>
              <Link to="/">Product</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/cart">Total Amount: ${totalPrice}</Link>
          <Link to="/cart">Cart: {totalQty}</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
