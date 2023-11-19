import { configureStore } from '@reduxjs/toolkit';
import bibleReducer from './reducers/bibleSlice.js';
import bookReducer from './reducers/bookSlice.js';
import chapterReducer from './reducers/chapterSlice.js';

const store = configureStore({
  reducer: {
    bibleReducer,
    bookReducer,
    chapterReducer
  },
})

export default store