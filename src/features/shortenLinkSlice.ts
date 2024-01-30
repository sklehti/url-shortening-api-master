import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface ShortenLinkState {
  value: string;
}

// Define the initial state using that type
const initialState: ShortenLinkState = {
  value: "",
};

export const shortenLinkSlice = createSlice({
  name: "shortenLink",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    shortenLink: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { shortenLink } = shortenLinkSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectShortenLink = (state: RootState) => state.shortenLink.value;

export default shortenLinkSlice.reducer;
