import React from "react";
import notFound from "../../assets/notFound.jpeg";
import "./notFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigator = useNavigate();
  return (
    <div className="back">
      <h5 className="login-logo" onClick={() => navigator("/")}>
        Enity
      </h5>
      <div
        className="notFound"
        style={{
          backgroundImage: `url("${notFound}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <h2>Lost your way?</h2>
        <h3>Not Found 404</h3>
        <button onClick={() => navigator("/")}>Back to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
