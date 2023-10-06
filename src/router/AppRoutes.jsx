import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
// import LoginAuth from "../components/auth/LoginAuth";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
const Products = lazy(() => import("../pages/products/Products"));
const CartView = lazy(() => import("../pages/cart/CartView"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/products"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            {/* <LoginAuth> */}
            <Products />
            {/* </LoginAuth> */}
          </Suspense>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            {/* <LoginAuth> */}
            <CartView />
            {/* </LoginAuth> */}
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
