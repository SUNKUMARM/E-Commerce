import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../pages/cart/cartSlice";

const store = configureStore({
  reducer: {
    cartReducer,
  },
});
export default store;
