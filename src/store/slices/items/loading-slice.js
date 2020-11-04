import { createSlice } from '@reduxjs/toolkit'

const LoadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false
    },
    reducers: {
        loading: (state, action) => {
            state.loading = action.payload;
        }
    },
})

export const { loading } = LoadingSlice.actions

// A selector
export const loadingSelector = state => state.loading.loading;

export default LoadingSlice.reducer;


