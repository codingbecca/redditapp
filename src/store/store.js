import { configureStore } from '@reduxjs/toolkit';

import craftsnarkReducer from './craftsnarkSlice';
import commentReducer from './commentSlice';

export default configureStore({
    reducer: {
        craftsnark: craftsnarkReducer,
        comments: commentReducer
    }
})