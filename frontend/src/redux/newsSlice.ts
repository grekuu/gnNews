import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import newsApi from "../common/newsApi";

export const fetchAsyncNews = createAsyncThunk(
  "news/fetchAsyncNews",
  async (country: string) => {
    const response = await newsApi.get(`?country=${country}`);
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
  country: string;
}

const initialState: NewsState = {
  news: [],
  country: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
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

export const { setCountry } = newsSlice.actions;

export const getAllNews = (state: RootState) => state.news.news;
export const getCountry = (state: RootState) => state.news.country;

export default newsSlice.reducer;
