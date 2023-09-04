import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";

const CartView = () => {
  const cartState = useSelector((store) => store.cartReducer);

  return (
    <div className="cart-container">
      <h1 className="cart-title">CartView</h1>
      <ul className="cart-content">
        {cartState.cartItems?.map((item) => (
          <li key={item.id} className="single-content">
            <img
              className="cart-img"
              src={`https://images.bewakoof.com/t640/${item.display_image}`}
              alt={item.name}
            />
            <div className="cart-center">
              <h3>{item.name}</h3>
              <p>
                Price: ₹ <b>{item.price}</b>
              </p>
              <div className="cartInc">
                <button>
                  <b>-</b>
                </button>
                <p>{item.count}</p>
                <button>
                  <b>+</b>
                </button>
              </div>
              <p className="subTotal">
                Price ({item.count}-item) ₹ <b>{item.price * item.count}</b>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="cart-title">Grand Total : {cartState?.total}</h1>
    </div>
  );
};

export default CartView;
