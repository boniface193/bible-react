import { configureStore } from '@reduxjs/toolkit'
import bibleReducer from './reducers/bibleSlice.js'

const store = configureStore({
  reducer: {
    bibleReducer
  },
})

export default store