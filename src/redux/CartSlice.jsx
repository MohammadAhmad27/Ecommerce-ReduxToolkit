import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = Cart.actions;
export default Cart.reducer;