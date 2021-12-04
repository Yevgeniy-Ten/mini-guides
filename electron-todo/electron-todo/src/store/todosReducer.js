import {createSlice} from "@reduxjs/toolkit";
import {axiosTodos, axiosCreateTodo} from "./todosActions";

const slice = createSlice({
    name: "Todos",
    initialState: {
        formIsOpen: false,
        todos: [],
        isLoading: false,
        isCreated: false
    },
    reducers: {
        showForm(state) {
            state.formIsOpen = true
        },
        hideForm(state) {
            state.formIsOpen = false
        },
    },
    extraReducers: {
        [axiosCreateTodo.pending]: (state) => {
            state.isLoading = true
            state.isCreated = false
        },
        [axiosCreateTodo.fulfilled]: (state, {payload: newTodo}) => {
            state.isLoading = false
            state.todos = state.todos.concat(newTodo)
            state.isCreated = true
        },
        [axiosCreateTodo.rejected]: (state) => {
            state.isLoading = false
        },
        [axiosTodos.pending]: (state) => {
            state.isLoading = true
        },
        [axiosTodos.fulfilled]: (state, {payload: todos}) => {
            state.isLoading = false
            state.todos = state.todos.concat(todos)
        },
        [axiosTodos.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export const {hideForm, showForm} = slice.actions
export default slice.reducer