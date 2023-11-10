import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../https.interceptors';

export const fetchBible = createAsyncThunk('bible/fetchBible', async () => {
  const res = await axios.get('/v1/bibles');
  return res.data
});

const bibleSlice = createSlice({
  name: 'getBible',
  initialState: {
    data: [],
    status: 'idle',
    loading: true,
  },
  reducers: {
    getFormValue: (state, { payload }) => {
      try {
        state.data = state.data.filter((item) => {
          if (item.name.indexOf(payload) > -1 && item.abbreviation.indexOf(payload) > -1) {
            return item.name
          }
        });
      } catch (error) {
        state.error = error
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBible.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBible.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.data = payload.data;
        state.loading = false;
      })
      .addCase(fetchBible.rejected, (state) => {
        state.status = 'failed'
      });
  }
})

export default bibleSlice.reducer;
export const { getFormValue } = bibleSlice.actions;
