import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartSlice } from "./CartSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
