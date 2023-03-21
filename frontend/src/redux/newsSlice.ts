import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import newsApi from "../common/newsApi";

export const fetchAsyncNews = createAsyncThunk(
  "news/fetchAsyncNews",
  async () => {
    const response = await newsApi.get("");
    console.log(response.data);
    return response.data.articles;
  }
);

interface NewsSource {
  name: string;
}

export interface News {
  title: string;
  source: NewsSource;
  publishedAt: string;
  urlToImage: string;
  url: string;
  content: string;
  author: string;
}

interface NewsState {
  news: News[];
}

const initialState: NewsState = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncNews.pending, () => {});
    builder.addCase(fetchAsyncNews.fulfilled, (state, { payload }) => {
      state.news = payload;
    });
    builder.addCase(fetchAsyncNews.rejected, () => {});
  },
});

// export const { showPopUp } = appSlice.actions

export const getAllNews = (state: RootState) => state.news.news;

export default newsSlice.reducer;
