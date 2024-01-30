import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface AllLinksState {
  values: { shortenLink: string; originalLink: string };
}

interface InviteState {
  values: AllLinksState[];
}

// Define the initial state using that type
const initialState: InviteState = {
  values: [],
};

export const allLinksSlice = createSlice({
  name: "allLinks",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    allLinks: (state, action: PayloadAction<AllLinksState>) => {
      console.log(action.payload.values.originalLink);

      state.values.push(action.payload);
    },
  },
});

export const { allLinks } = allLinksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAllLinks = (state: RootState) => state.allLinks.values;

export default allLinksSlice.reducer;
