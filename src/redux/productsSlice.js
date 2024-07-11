import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[productIndex] = action.payload;
    },
    toggleAvailability: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products[productIndex].available =
        !state.products[productIndex].available;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateProduct,
  toggleAvailability,
} = productSlice.actions;

export default productSlice.reducer;