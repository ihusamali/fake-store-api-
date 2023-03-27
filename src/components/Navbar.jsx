import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
