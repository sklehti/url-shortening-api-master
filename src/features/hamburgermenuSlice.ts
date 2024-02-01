import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface HamburgerState {
  value: boolean;
}

const initialState = {
  value: false,
} as HamburgerState;

export const hamburgermenuSlice = createSlice({
  name: "hamburgermenu",

  initialState,
  reducers: {
    openMenu: (state) => {
      state.value = true;
    },
    closeMenu: (state) => {
      state.value = false;
    },
  },
});

export const { openMenu, closeMenu } = hamburgermenuSlice.actions;

export const selectHamburgermenu = (state: RootState) =>
  state.hamburgermenu.value;

export default hamburgermenuSlice.reducer;
