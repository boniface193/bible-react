import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../https.interceptors';

export const fetchChapter = createAsyncThunk('book/fetchChapter', async () => {
  const { id } = JSON.parse(localStorage.getItem('data'));
  const { bookid } = JSON.parse(localStorage.getItem('book'));
  const res = await axios.get(`/v1/bibles/${id}/books/${bookid}/chapters`);
  return res.data
});

export const fetchChapterByID = createAsyncThunk('book/fetchChapterByID', async (setNextPage) => {
  const { id } = JSON.parse(localStorage.getItem('data'));
  const chapterid = Object.keys(setNextPage).length === 0 ? JSON.parse(localStorage.getItem('chapter')) : setNextPage;
  const res = await axios.get(`/v1/bibles/${id}/chapters/${chapterid.id}?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false`);
  return res.data;
});

const chapterSlice = createSlice({
  name: 'getChapter',
  initialState: {
    data: [],
    chapter: [],
    pages: [],
    status: '',
    loading: true,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchChapter.pending, (state) => {
        state.status = ''
        state.loading = true;
      })
      .addCase(fetchChapter.fulfilled, (state, { payload }) => {
        const { data } = payload
        state.data = data;
        state.loading = false;
      })
      .addCase(fetchChapter.rejected, (state) => {
        state.status = 'failed to load content, try refreshing your browser'
      });
    builder.addCase(fetchChapterByID.pending, (state) => {
      state.status = ''
      state.loading = true;
    }).addCase(fetchChapterByID.fulfilled, (state, { payload }) => {
      const { data } = payload;
      state.chapter = data;
      state.loading = false;
    }).addCase(fetchChapterByID.rejected, (state) => {
      state.status = 'failed to load content, try refreshing your browser'
    });
  }
})

export default chapterSlice.reducer;
