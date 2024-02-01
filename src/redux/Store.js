import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice.js";
// import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: { user: userSlice },
  // middleware: [thunk]
});
