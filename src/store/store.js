import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";
const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

export default store;
