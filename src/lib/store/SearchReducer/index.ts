import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../";

export interface SearchState {
  categoryId: number;
  townId: number;
  searchValue: string;
  limit: number;
}

const initialState: SearchState = {
  categoryId: 0,
  townId: 0,
  searchValue: "",
  limit: 30,
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSearchTownId: (state, action: PayloadAction<number>) => {
      state.townId = action.payload;
    },
    setSearchLimit: (state, action: PayloadAction<number>) => {
      state.limit += action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setSearchCategoryId,
  setSearchTownId,
  setSearchLimit,
  setSearchValue,
} = SearchSlice.actions;

export const searchCategory = (state: RootState) => state.search.categoryId;
export const searchTownId = (state: RootState) => state.search.townId;
export const searchSearchValue = (state: RootState) => state.search.searchValue;
export const searchLimit = (state: RootState) => state.search.limit;

export default SearchSlice.reducer;
