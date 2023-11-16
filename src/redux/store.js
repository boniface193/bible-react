import { configureStore } from '@reduxjs/toolkit';
import bibleReducer from './reducers/bibleSlice.js';
import bookReducer from './reducers/bookSlice.js';

const store = configureStore({
  reducer: {
    bibleReducer,
    bookReducer
  },
})

export default store