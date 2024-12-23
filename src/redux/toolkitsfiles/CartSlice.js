/*
import { createSlice } from "@reduxjs/toolkit";

const EkartSlice = createSlice({
  name: "Ekart",
  initialState: [],
  reducers: {
    AddToCart: (state, action) => {
      state.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
  },
});

export const { AddToCart, RemoveFromCart } = EkartSlice.actions;
export default EkartSlice.reducer;


*/
import { createSlice } from "@reduxjs/toolkit";

const EkartSlice = createSlice({
  name: "Ekart",
  initialState: [],
  reducers: {
    AddToCart: (state, action) => {
      state.push(action.payload); // Adds the item to the cart
    },
    RemoveFromCart: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
  },
});

export const { AddToCart, RemoveFromCart } = EkartSlice.actions;
export default EkartSlice.reducer;
