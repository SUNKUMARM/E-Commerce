import React from "react";
import "./contact.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-icon">
        <FaFacebookF size={30} />
        <AiOutlineInstagram size={30} />
        <AiOutlineTwitter size={30} />
        <FaWhatsapp size={30} />
      </div>
      <div className="content">
        <p>Home</p>
        <p>About</p>
        <p>Products</p>
        <p>Cart</p>
        <p>Help Center</p>
        <p>Advertise</p>
        <p>Become a seller</p>
        <p>Gift Cards</p>
      </div>
      <p>
        <AiOutlineCopyrightCircle size={12} />
        Made by Sunkumar M
      </p>
    </div>
  );
};

export default Contact;
