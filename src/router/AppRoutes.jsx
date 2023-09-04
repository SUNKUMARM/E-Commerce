import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import CartView from "../pages/cart/CartView";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/Cart" element={<CartView />} />
      <Route path="*" element={<h1>Not Found 404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
