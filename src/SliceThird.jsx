import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishitems: [],
  },
  reducers: {
    addItemWishlist: (state, action) => {
      state.wishitems.push(action.payload);
    },
    removeItemWishlist: (state, action) => {
      state.wishitems.pop();
    },
    clearWishlist: (state) => {
      state.wishitems = [];
    },
  },
});

export const { addItemWishlist, removeItemWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

