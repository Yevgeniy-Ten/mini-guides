import {configureStore} from "@reduxjs/toolkit";
import axios from "axios"
import todosReducer from "./todosReducer";

const instance = axios.create({
    baseURL: "http://localhost:3003"
})

const store = configureStore({
    reducer: {
        todos: todosReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument: instance,
        },
        serializableCheck: false
    }))
})

export default store