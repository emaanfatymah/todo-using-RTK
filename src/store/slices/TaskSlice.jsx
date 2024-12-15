import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    removeTask(state, action) {
      state.splice(action.payload, 1);
    },
    updateTask(state, action) {
      const { id, updatedTask } = action.payload;
      state[id] = updatedTask;
    },
    deleteTasks(state) {
      return [];
    },
  },
});

export default taskSlice.reducer;
export const { addTask, removeTask, updateTask, deleteTasks } =
  taskSlice.actions;
