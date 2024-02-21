import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectTotalPrice = (state) => {
  return state.cart.reduce((total, item) => total + item.price, 0);
};

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
