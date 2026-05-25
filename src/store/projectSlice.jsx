import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://api.github.com/users/octocat/repos')
            if(!response.ok) throw new Error('Network response was not ok')

            const data = await response.json()

            return data.filter(repo => !repo.fork).slice(0,4)
        } catch {
            return rejectWithValue("failed to fetch the project. Please try again later.")
        }
    }
)

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProjects.pending, (state) => {
            state.loading = true;

        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchProjects.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default projectSlice.reducer