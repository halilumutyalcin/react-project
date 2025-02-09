import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("data-key")) || [], 
  total: JSON.parse(localStorage.getItem("total-key")) || 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.data.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.data.push({ ...product, quantity: 1 });
      }
      state.total = state.data.reduce((acc, product) => acc + product.price * product.quantity, 0);
      localStorage.setItem("data-key", JSON.stringify(state.data));
      localStorage.setItem("total-key", JSON.stringify(state.total));
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter((product) => product.id !== action.payload);
      state.total = state.data.reduce((acc, product) => acc + product.price * product.quantity, 0);
      localStorage.setItem("data-key", JSON.stringify(state.data));
      localStorage.setItem("total-key", JSON.stringify(state.total));
    },
    clearCart: (state) => {
      state.data = [];
      state.total = 0;
      localStorage.setItem("data-key", JSON.stringify(state.data));
      localStorage.setItem("total-key", JSON.stringify(state.total));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
