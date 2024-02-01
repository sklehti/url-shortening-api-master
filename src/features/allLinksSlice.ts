import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface AllLinksState {
  values: { shortenLink: string; originalLink: string };
}

interface InviteState {
  values: AllLinksState[];
}

const initialState: InviteState = {
  values: [],
};

export const allLinksSlice = createSlice({
  name: "allLinks",

  initialState,
  reducers: {
    allLinks: (state, action: PayloadAction<AllLinksState>) => {
      state.values.push(action.payload);
    },
  },
});

export const { allLinks } = allLinksSlice.actions;

export const selectAllLinks = (state: RootState) => state.allLinks.values;

export default allLinksSlice.reducer;
