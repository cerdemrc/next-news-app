import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk('news/getNews', async () => {
	const res = await fetch('https://inshortsapi.vercel.app/news?category=all');

	return res.json();
});

export const newsSlice = createSlice({
	name: 'news',
	initialState: {
		items: [],
		status: 'idle',
	},
	reducers: {},
	extraReducers: {
		[fetchNews.pending]: (state) => {
			state.status = 'loading';
		},
		[fetchNews.fulfilled]: (state, action) => {
			state.items = action.payload.data;
			state.status = 'succeeded';
		},
		[fetchNews.rejected]: (state, action) => {
			state.error = action.error.message;
			state.status = 'failed';
		},
	},
});

export default newsSlice.reducer;
