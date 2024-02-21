import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.qty++;
      } else {
        // Otherwise, push new item to the cart
        state.push({ ...action.payload, qty: 1 });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.startsWith("cart/"),
        (state) => {
          saveState(state);
        }
      )
      .addDefaultCase((state) => {
        saveState(state);
      });
  },
});

export const selectTotalPrice = (state) => {
  return state.cart.reduce((total, item) => total + item.price * item.qty, 0);
};

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
