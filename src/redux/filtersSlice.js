import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, { payload: filter }) {
      state.name = filter;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;
