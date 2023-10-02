import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// https://dummyjson.com/products

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const productData = await response.json();

  console.log(productData.products);

  return productData.products;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
