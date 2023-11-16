import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../https.interceptors';

export const fetchBook = createAsyncThunk('book/fetchBook', async () => {
  const { id } = JSON.parse(localStorage.getItem('data'));
  const res = await axios.get(`/v1/bibles/${id}/books`);
  return res.data
});

const bookSlice = createSlice({
  name: 'getBook',
  initialState: {
    data: [],
    showRandomText: [],
    status: '',
    loading: true,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.status = ''
        state.loading = true;
      })
      .addCase(fetchBook.fulfilled, (state, { payload }) => {
        const {data} = payload
        state.data = data;
        const randoms = Math.floor(Math.random() * data.length)
        state.showRandomText = data[randoms].nameLong;
        state.loading = false;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.status = 'failed to load content, try refreshing your browser'
      });
  }
})

export default bookSlice.reducer;
