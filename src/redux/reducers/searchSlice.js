import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../https.interceptors';

export const fetchSearch = createAsyncThunk('bible/fetchSearch', async (params) => {
  const { id } = JSON.parse(localStorage.getItem('data'));
  const res = await axios.get(`/v1/bibles/${id}/search?query=${params}&sort=relevance`);
  return res.data
});

const searchSlice = createSlice({
  name: 'getSearch',
  initialState: {
    data: [],
    status: '',
    loading: true,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = ''
        state.loading = true;
      })
      .addCase(fetchSearch.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.loading = false;
      })
      .addCase(fetchSearch.rejected, (state) => {
        state.status = 'failed to load content, try refreshing your browser'
      });
  }
})

export default searchSlice.reducer;
