import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts, getPostsByFlair, getPostsFromSearch } from '../../api/reddit';

const initialState = {
    posts: [],
    error: null,
    isLoading: false
}

export const fetchPosts = createAsyncThunk('craftsnarkPosts/fetchPosts', async () => {
    const posts = await getPosts();
    return posts;
})

export const fetchPostsByFlair = createAsyncThunk('craftsnarkPosts/fetchByFlair', async (flair) => {
    const posts = await getPostsByFlair(flair);
    return posts
})

export const searchPosts = createAsyncThunk('craftsnarkPosts/searchPosts', async (searchTerm) => {
    const posts = await getPostsFromSearch(searchTerm);
    return posts;
})

const craftsnarkSlice = createSlice({
    name: 'craftsnarkPosts',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchPostsByFlair.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPostsByFlair.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.posts = action.payload;
            })
            .addCase(fetchPostsByFlair.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(searchPosts.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.posts = action.payload;
                state.searchTerm = '';
            })
            .addCase(searchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default craftsnarkSlice.reducer;