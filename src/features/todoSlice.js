import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers :{
        addTodo : (state,action) => {
            state.todos.push(action.payload);
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter(e => e.id!==action.payload);
        },
        toggleTodo : (state,action) => {
            const task = state.todos.find(e => e.id===action.payload);
            if(task){
                task.completed = !(task.completed);
            }
        }
    }
});

export const { addTodo,removeTodo,toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;