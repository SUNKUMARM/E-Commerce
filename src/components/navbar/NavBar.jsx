import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FiLogIn } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScreen = () => {
      const element = document.getElementById("myElement");
      const screenWidth = window.innerWidth;

      if (screenWidth < 760) {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    };
    handleScreen();
    window.addEventListener("resize", handleScreen);
  }, []);

  return (
    <div className="navbar-container flex">
      <div className="navbar-parent">
        <div className="logo">
          <p>ENITY</p>
        </div>
        <div onClick={() => setShow(!show)} className="navbar-icon-parent">
          <AiOutlineMenu size={20} className="navbar-icon" />
        </div>
        <div id="myElement">
          <p>Home</p>
          <p>About</p>
          <p>Products</p>
          <p>Contact</p>
          <div className="button flex">
            <p>
              <FiLogIn size={23} className="icon" />
            </p>
            <p>Login</p>
          </div>
          <div className="button flex">
            <p>
              <FaShoppingCart size={23} />
            </p>
            <p>Cart</p>
          </div>
        </div>
      </div>
      {show && (
        <div className="navbar-List flex">
          <p>Home</p>
          <p>About</p>
          <p>Products</p>
          <p>Contact</p>
          <div className="button flex">
            <p>
              <FiLogIn size={20} className="icon" />
            </p>
            <p>Login</p>
          </div>
          <div className="button flex">
            <p>
              <FaShoppingCart size={20} />
            </p>
            <p>Cart</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
