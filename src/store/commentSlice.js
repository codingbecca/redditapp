import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import { getPostComments } from '../../api/reddit';

const initialState = {
    comments: [],
    isLoading: false,
    error: null
}

export const fetchPostComments = createAsyncThunk('comments/fetchPostComments', async(permalink) => {
    const comments = getPostComments(permalink);
    return comments;
})

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPostComments.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchPostComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments = action.payload;
            })
            .addCase(fetchPostComments.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default commentSlice.reducer;