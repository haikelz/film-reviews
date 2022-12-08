import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./slices/filmSlice";

export const store = configureStore({
  reducer: {
    film: filmSlice,
  },
});
