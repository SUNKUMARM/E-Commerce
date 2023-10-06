import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FiLogIn } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const navigator = useNavigate();

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
          <Link to="/" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="/about" smooth={true} duration={500}>
            About
          </Link>
          {/* <div onClick={() => navigator("/products")}>Products</div> */}
          <Link to="/contact" smooth={true} duration={500}>
            Contact
          </Link>
          <div className="button flex" onClick={() => navigator("/login")}>
            <p>
              <FiLogIn size={23} className="icon" />
            </p>
            <p>Login</p>
          </div>
          <div className="button flex" onClick={() => navigator("/cart")}>
            <p>
              <FaShoppingCart size={23} />
            </p>
            <p>Cart</p>
          </div>
        </div>
      </div>
      {show && (
        <div className="navbar-List flex">
          <Link to="/" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="/about" smooth={true} duration={500}>
            About
          </Link>
          {/* <div onClick={() => navigator("/products")}>Products</div> */}
          <Link to="/contact" smooth={true} duration={500}>
            Contact
          </Link>
          <div className="button flex" onClick={() => navigator("/login")}>
            <p>
              <FiLogIn size={20} className="icon" />
            </p>
            <p>Login</p>
          </div>
          <div className="button flex" onClick={() => navigator("/cart")}>
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
