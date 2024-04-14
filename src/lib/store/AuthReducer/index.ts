import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import type { RootState } from "..";

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state) => {
      Cookies.remove("jwtToken");
      Cookies.remove("jwtTokenRefresh");
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
    login: (state) => {
      localStorage.setItem("isLoggedIn", "true");
      state.isLoggedIn = true;
    },
  },
});

export const { setIsLoggedIn } = AuthSlice.actions;
export const { logout } = AuthSlice.actions;
export const { login } = AuthSlice.actions;

export const authIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default AuthSlice.reducer;
