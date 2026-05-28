// Process

// import configureStore first

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

// store it in a variable

export const store = configureStore({
    reducer: todoReducer
});

// now create reducers/slices