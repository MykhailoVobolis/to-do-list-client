import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterTasks: {
      description: "",
    },
  },
  reducers: {
    changeTextFilter: (state, action) => {
      state.filterTasks.description = action.payload;
    },
  },
});

export const filtersReduser = filtersSlice.reducer;
export const { changeTextFilter } = filtersSlice.actions;
