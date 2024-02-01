import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface OriginalLinkState {
  value: string;
}

// Define the initial state using that type
const initialState: OriginalLinkState = {
  value: "",
};

export const originalLinkSlice = createSlice({
  name: "originalLink",

  initialState,
  reducers: {
    originalLink: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { originalLink } = originalLinkSlice.actions;

export const selectOriginalLink = (state: RootState) =>
  state.originalLink.value;

export default originalLinkSlice.reducer;
