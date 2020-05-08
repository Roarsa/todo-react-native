import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const todo = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push({ id: id++, task: action.payload, completed: false });
    },
    removeTask(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTask(state, action) {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    editTask(state, action) {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) task.task = action.payload.task;
    },
  },
});

export const { addTask, removeTask, toggleTask, editTask } = todo.actions;

export default todo.reducer;
