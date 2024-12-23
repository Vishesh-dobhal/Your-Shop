


import { configureStore } from "@reduxjs/toolkit";
import EkartSlice from "./CartSlice";  

const Store = configureStore({
  reducer: {
    Ekart: EkartSlice,  // This should match the slice name in CartSlice
  },
});

export default Store;
