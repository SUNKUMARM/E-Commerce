import React from "react";
import shop from "../../assets/shop3.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div
        className="home-parent"
        style={{
          backgroundImage: `url(${shop})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="home-content">
        <p>FASHION &TRENDING </p>
        <p>
          BRINGING YOUR FASHION BRAND'S UNIQUE IDENTITY TO LIFE THROUGH
          STRATEGIC MARKETING AND ADVERTISING.
        </p>
      </div>
    </div>
  );
};

export default Home;
