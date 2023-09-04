import React from "react";
import "./contact.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Contact = () => {
  const navigator = useNavigate();

  return (
    <div name="/contact" className="contact-container">
      <div className="contact-icon">
        <p onClick={() => navigator("/")}>
          <FaFacebookF size={30} />
        </p>
        <p onClick={() => navigator("/")}>
          <AiOutlineInstagram size={30} />
        </p>
        <p onClick={() => navigator("/")}>
          <AiOutlineTwitter size={30} />
        </p>
        <p onClick={() => navigator("/")}>
          <FaWhatsapp size={30} />
        </p>
      </div>
      <div className="content">
        <Link to="/" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="/about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="/products" smooth={true} duration={500}>
          Products
        </Link>
        <Link to="/cart" smooth={true} duration={500}>
          Cart
        </Link>
        <p onClick={() => navigator("/")}>Help Center</p>
        <p onClick={() => navigator("/")}>Advertise</p>
        <p onClick={() => navigator("/")}>Become a seller</p>
        <p onClick={() => navigator("/")}>Gift Cards</p>
      </div>
      <p>
        <AiOutlineCopyrightCircle size={12} />
        Made by Sunkumar M
      </p>
    </div>
  );
};

export default Contact;
