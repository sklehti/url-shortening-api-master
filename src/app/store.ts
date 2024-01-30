import { configureStore } from "@reduxjs/toolkit";
import hamburgermenuSlice from "../features/hamburgermenuSlice";
import shortenLinkSlice from "../features/shortenLinkSlice";
import originalLinkSlice from "../features/originalLinkSlice";
import allLinksSlice from "../features/allLinksSlice";

export const store = configureStore({
  reducer: {
    hamburgermenu: hamburgermenuSlice,
    shortenLink: shortenLinkSlice,
    originalLink: originalLinkSlice,
    allLinks: allLinksSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
