import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const cartProducts = useSelector((state) => state.cart);

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
          <Link to="/cart">Cart: {cartProducts.length}</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
