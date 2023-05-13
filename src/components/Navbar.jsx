import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

function Navbar({ cart }) {
  const [search, setSearch] = useState("");
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="navbar">
      {/* <input
        className="search"
        placeholder="Search"
        type="text"
        value={search}
        onChange={handleInputChange}
      ></input> */}

      <h1 className="title">EVen.</h1>

      <Link to="/cart">
        <FaShoppingCart className="cart-item-count" />
        <span className="cart-item-count">{" : " + cart.length}</span>
      </Link>
    </div>
  );
}

export default Navbar;
