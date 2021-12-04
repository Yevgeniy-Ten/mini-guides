import {createAsyncThunk} from "@reduxjs/toolkit"


export const axiosTodos = createAsyncThunk("axios/getTodos",
    async (_, {extra: axios}) => {
        const response = await axios.get("/todos")
        return response.data
    })

export const axiosCreateTodo = createAsyncThunk("axios/createTodo",
    async (todo, {extra: axios}) => {
        const response = await axios.post("/todos", todo)
        return response.data
    })