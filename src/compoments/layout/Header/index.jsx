import React, { useContext } from "react";
import Logo from "../../../assets/images/header logo.svg";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { OrganContext } from "../../context";

const Header = () => {
  const { basket } = useContext(OrganContext);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={Logo} alt="Logo" />

          <div className="header-nav">
            <Link to="/home">Home</Link>
            <a href="#">About</a>
            <Link to="/contact">Contact</Link>
            <a href="#">Shop</a>
            <a href="#">Project</a>
            <Link to="/admin">Admin</Link>
          </div>

          <div className="header-search">
            <input type="text" />
            <button>
              <IoSearch />
            </button>

            <div className="header-cart">
              <Link to="/basket" className="cart-link">
                <h2>Cart ({basket.length})</h2>
                <h5>
                  <SlBasket size={24} />
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
