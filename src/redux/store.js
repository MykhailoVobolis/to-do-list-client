import { configureStore } from "@reduxjs/toolkit";
import { tasksReduser } from "./tasks/slice.js";
import { filtersReduser } from "./filters/slice.js";

export const store = configureStore({
  reducer: {
    tasks: tasksReduser,
    filters: filtersReduser,
  },
});
