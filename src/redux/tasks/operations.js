import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../helpers.js";

axios.defaults.baseURL = "https://to-do-list-server-dgf5.onrender.com/";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (filterParams, thunkAPI) => {
  try {
    const response = await axios.get("/tasks", {
      params: { description: filterParams },
    });

    return response.data.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const addTask = createAsyncThunk("tasks/addTask", async (description, thunkAPI) => {
  try {
    const response = await axios.post("/tasks", { description });

    return response.data.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`/tasks/${taskId}`);

    return response.data.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});
