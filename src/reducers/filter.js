import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

const filter = createSlice({
  name: "filter",
  initialState: filters.SHOW_ALL,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filter.actions;

export default filter.reducer;
