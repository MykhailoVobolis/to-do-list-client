import { configureStore } from "@reduxjs/toolkit";
import { tasksReduser } from "./tasks/slice.js";

export const store = configureStore({
  reducer: {
    tasks: tasksReduser,
    // filters: filtersReducer,
  },
});
