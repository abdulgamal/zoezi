import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addToCartProducts: (state, action) => {
      let itemExists = state.find((prod) => prod.id === action.payload.id);
      if (itemExists) {
        itemExists.qty = itemExists.qty + 1;
      } else {
        let newProduct = { ...action.payload, qty: 1 };
        state.push(newProduct);
      }
    },
    removeFromCartProducts: (state, action) => {
      let qtyIsOne = action.payload.qty === 1;
      if (qtyIsOne) {
        return state.filter((prod) => prod.id !== action.payload.id);
      } else {
        let updatedProduct = state.find(
          (prod) => prod.id === action.payload.id
        );
        updatedProduct.qty = updatedProduct.qty - 1;
      }
    },
    // eslint-disable-next-line no-unused-vars
    clearCartProducts: (_state) => {
      return [];
    },
  },
});

export const { addToCartProducts, removeFromCartProducts, clearCartProducts } =
  productSlice.actions;
export default productSlice.reducer;
