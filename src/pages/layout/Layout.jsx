import React from "react";
import "./layout.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const Layout = ({ products }) => {
  const dispatch = useDispatch();

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
          <p>
            Price: ₹ <b>{product.price}</b>
          </p>
          <button
            className="addCart"
            onClick={() => dispatch(addToCart({ ...product, count: 1 }))}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
};

export default Layout;
