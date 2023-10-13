import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice";
import cartSlice from "./SliceSecond";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
  },
});
