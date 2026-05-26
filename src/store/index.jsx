import {configureStore} from '@reduxjs/toolkit'
import projectReducer from './projectSlice'
import blogReducer from './blogSlice'

export const store = configureStore({
    reducer: {
        projects: projectReducer,
        blogs: blogReducer,
    }
})

