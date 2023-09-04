import React from "react";
import shop from "../../assets/shop3.jpg";
import "./home.css";
import NavBar from "../../components/navbar/NavBar";
import Products from "../products/Products";
import About from "../about/About";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <NavBar />
      <div name="/" className="home-container">
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
      <Products />
      <About />
      <Contact />
    </>
  );
};

export default Home;
