import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    info: null,
  },
  reducers: {
    //this deals when a user is logged in correctly will be called
    Logged: (state, action) => {
      state.loggedIn = true;
      state.info = action.payload;
    },
    //logging out the user
    LoggedOut: (state) => {
      state.loggedIn = false;
    },
    //this code stores the user's info 
    SetUser: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { Logged, LoggedOut, SetUser } = authSlice.actions;
export const selectloggedIn = (state) => state.user.loggedIn;
export const selectInfo = (state) => state.user.info;
export default authSlice.reducer;
