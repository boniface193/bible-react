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
    status: '',
    loading: true,
  },
  reducers: {
    getFormValue: (state, { payload }) => {
      try {
        state.data = state.data.filter((item) => item.name.toLowerCase().indexOf(payload) > -1);
        if (state.data.length < 1) {
          state.status = 'Ops! Nothing'
        }
      } catch (error) {
        state.error = error
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBible.pending, (state) => {
        state.status = ''
        state.loading = true;
      })
      .addCase(fetchBible.fulfilled, (state, { payload }) => {
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
