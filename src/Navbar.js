import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let Navigate = useNavigate();
  return (
    <div className="header">
      <h1 className="main-head"> Food </h1>

      <div className="nav-links">
        <Link to="/">
          <button className="cart">
            <b>Home</b>
          </button>{" "}
          |
        </Link>
        <Link to="/Cart">
          <button className="cart">
            <b>Cart</b>
          </button>
        </Link>
        |
        <button className="cart" onClick={() => Navigate("/Offers")}>
          <b>Offers</b>
        </button>
        |
        <Link to="/Address">
          <button className="cart">
            <b>Address</b>
          </button>
        </Link>
        |
        <Link to="/Help">
          <button className="cart">
            <b>Help</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
