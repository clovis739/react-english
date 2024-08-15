import {configureStore} from '@reduxjs/toolkit'
// store configuration for redux toolkit from reduxjs 

import todoReducer from "../features/todo/todoSlice"

export const store = configureStore ({
    reducer: todoReducer,
    // reducer object or method
})