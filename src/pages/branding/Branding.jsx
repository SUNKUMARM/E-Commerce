import React from "react";
import "./branding.css";
import kurta1 from "../../assets/kurta1.webp";
import kurta2 from "../../assets/kurta2.webp";
import kurta3 from "../../assets/kurta3.webp";
import TShirt1 from "../../assets/TShirt1.webp";
import TShirt2 from "../../assets/TShirt2.webp";
import TShirt3 from "../../assets/TShirt3.webp";
import shoe1 from "../../assets/shoe1.webp";
import shoe2 from "../../assets/shoe2.webp";
import shoe3 from "../../assets/shoe3.webp";
import shirt1 from "../../assets/shirt1.webp";
import shirt2 from "../../assets/shirt2.webp";
import shirt3 from "../../assets/shirt3.webp";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Branding = () => {
  const navigator = useNavigate();
  return (
    <div className="branding-container">
      <div className="branding-title">
        <p>TOP TRENDING</p>
      </div>
      <div className="trending">
        <img src={kurta1} alt="" />
        <img src={kurta2} alt="" />
        <img src={kurta3} alt="" />
        <img src={TShirt1} alt="" />
        <img src={TShirt2} alt="" />
        <img src={TShirt3} alt="" />
        <img src={shoe1} alt="" />
        <img src={shoe2} alt="" />
        <img src={shoe3} alt="" />
        <img src={shirt1} alt="" />
        <img src={shirt2} alt="" />
        <img src={shirt3} alt="" />
      </div>
      <div className="view">
        <p>VIEW ALL COLLECTIONS</p>
        <BsArrowRight
          className="branding-icon"
          onClick={() => navigator("/")}
        />
      </div>
    </div>
  );
};

export default Branding;
