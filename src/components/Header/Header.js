import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <nav>
        <a href="">Shop</a>
        <a href="">Review</a>
        <a href="">Management</a>
      </nav>
    </div>
  );
};

export default Header;
