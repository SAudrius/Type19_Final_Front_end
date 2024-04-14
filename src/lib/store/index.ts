import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthReducer";
import SearchReducer from "./SearchReducer";
import UiReducer from "./UiReducer";
// ...

export const store = configureStore({
  reducer: {
    search: SearchReducer,
    auth: AuthReducer,
    ui: UiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
