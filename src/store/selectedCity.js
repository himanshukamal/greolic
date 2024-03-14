// src/store/slices/citySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCity: "",
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    selectCity(state, action) {
      state.selectedCity = action.payload;
    },
  },
});

export const { selectCity } = citySlice.actions;

export default citySlice.reducer;
