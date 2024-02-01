import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface ShortenLinkState {
  value: string;
}

const initialState: ShortenLinkState = {
  value: "",
};

export const shortenLinkSlice = createSlice({
  name: "shortenLink",

  initialState,
  reducers: {
    shortenLink: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { shortenLink } = shortenLinkSlice.actions;

export const selectShortenLink = (state: RootState) => state.shortenLink.value;

export default shortenLinkSlice.reducer;
