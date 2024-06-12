import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../";

export interface SearchState {
  categoryId: number;
  categoryName: string;
  townId: number;
  townName: string;
  searchValue: string;
  limit: number;
  sortId: number;
}

const initialState: SearchState = {
  categoryId: 0,
  categoryName: "Select Category",
  townId: 0,
  townName: "Select Town",
  searchValue: "",
  limit: 30,
  sortId: 0,
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSearchCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload;
    },
    setSearchTownId: (state, action: PayloadAction<number>) => {
      state.townId = action.payload;
    },
    setSearchTownName: (state, action: PayloadAction<string>) => {
      state.townName = action.payload;
    },
    setSearchLimit: (state, action: PayloadAction<number>) => {
      state.limit += action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchSortId: (state, action: PayloadAction<number>) => {
      state.sortId = action.payload;
    },
  },
});

export const {
  setSearchCategoryId,
  setSearchCategoryName,
  setSearchTownId,
  setSearchTownName,
  setSearchLimit,
  setSearchValue,
  setSearchSortId,
} = SearchSlice.actions;

export const searchCategory = (state: RootState) => state.search.categoryId;
export const searchTownId = (state: RootState) => state.search.townId;
export const searchSearchValue = (state: RootState) => state.search.searchValue;
export const searchLimit = (state: RootState) => state.search.limit;
export const searchSort = (state: RootState) => state.search.sortId;
export const searchCategoryName = (state: RootState) =>
  state.search.categoryName;
export const searchTownName = (state: RootState) => state.search.townName;

export default SearchSlice.reducer;
