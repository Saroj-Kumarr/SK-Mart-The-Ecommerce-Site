import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice";
import cartSlice from "./SliceSecond";
import wishlistSlice from "./SliceThird";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
});
