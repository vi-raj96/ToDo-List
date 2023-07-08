import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice';

export const store = configureStore({
  reducer: {
    storeTodo : todoReducer
  },
});

export default store;