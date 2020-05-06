import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const todo = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        const { id, task } = action.payload;
        state.push({ id, task, completed: false });
      },
      prepare(task) {
        return { payload: { id: id++, task } };
      },
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
