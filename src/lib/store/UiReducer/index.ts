import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../";

interface UiState {
  isHamburgerMenuOpen: boolean;
  isOverlayVisible: boolean;
}
const intialState: UiState = {
  isHamburgerMenuOpen: false,
  isOverlayVisible: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: intialState,
  reducers: {
    openHamburgerMenu: (state) => {
      state.isHamburgerMenuOpen = true;
      state.isOverlayVisible = true;
    },
    closeHamburgerMenu: (state) => {
      state.isHamburgerMenuOpen = false;
      state.isOverlayVisible = false;
    },
  },
});

export const { openHamburgerMenu, closeHamburgerMenu } = uiSlice.actions;

export const selectIsHamburgerMenuOpen = (state: RootState) =>
  state.ui.isHamburgerMenuOpen;
export const selectIsOverlayVisible = (state: RootState) =>
  state.ui.isOverlayVisible;

export default uiSlice.reducer;
