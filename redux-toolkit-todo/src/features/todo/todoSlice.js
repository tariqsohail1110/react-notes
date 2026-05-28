import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'Hello World'}]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            };
            state.todos.push(todo)
        },  //state, action => always available
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : state.todos);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    }
});

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;