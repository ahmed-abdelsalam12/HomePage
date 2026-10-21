import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./rtk";
export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

