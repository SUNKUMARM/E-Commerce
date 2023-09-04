import React from "react";
import "./layout.css";

const Layout = ({ products }) => {
  return (
    <>
      {products?.map((product) => (
        <div key={product.id} className="item">
          <img
            className="img"
            src={`https://images.bewakoof.com/t640/${product.display_image}`}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </>
  );
};

export default Layout;
