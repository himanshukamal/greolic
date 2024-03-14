// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./selectedCity.js";

const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});

export default store;
