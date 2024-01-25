import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface HamburgerState {
  value: boolean;
}

// Define the initial state using that type
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

// Other code such as selectors can use the imported `RootState` type
export const selectHamburgermenu = (state: RootState) =>
  state.hamburgermenu.value;

export default hamburgermenuSlice.reducer;
