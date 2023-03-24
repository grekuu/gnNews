import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import newsApi from "../common/newsApi";

export const fetchAsyncNews = createAsyncThunk(
  "news/fetchAsyncNews",
  async (country: string) => {
    const response = await newsApi.get(`?country=${country}`);
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
  country: string;
  listView: boolean;
}

const initialState: NewsState = {
  news: [],
  country: "",
  listView: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    changeView: (state, action: PayloadAction<boolean>) => {
      state.listView = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncNews.pending, () => {});
    builder.addCase(fetchAsyncNews.fulfilled, (state, { payload }) => {
      state.news = payload;
    });
    builder.addCase(fetchAsyncNews.rejected, () => {});
  },
});

export const { setCountry, changeView } = newsSlice.actions;

export const getAllNews = (state: RootState) => state.news.news;
export const getCountry = (state: RootState) => state.news.country;
export const getListView = (state: RootState) => state.news.listView;

export default newsSlice.reducer;
