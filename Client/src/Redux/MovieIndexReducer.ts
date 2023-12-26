import { createSlice } from "@reduxjs/toolkit";
export const MoviePageIndex = createSlice({
  name: "UpcomingMoviePageIndex",
  initialState: {
    UpcomingMoviePageIndex: 1,
    TrendingMoviePageIndex: 1,
    DiscoveryMoviePageIndex: 1,
  },
  reducers: {
    IncrementUpcomingMoviePageIndex: (state) => {
      state.UpcomingMoviePageIndex += 1;
    },
    IncrementTrendingMoviePageIndex: (state) => {
      state.TrendingMoviePageIndex += 1;
    },
    IncrementDiscoveryMoviePageIndex: (state) => {
      state.DiscoveryMoviePageIndex += 1;
    },
    // DecrementUpcomingMoviePageIndex: (state) => {
    //   state.UpcomingMoviePageIndex -= 1;
    // },
    // DecrementTrendingMoviePageIndex: (state) => {
    //   state.TrendingMoviePageIndex -= 1;
    // },
  },
});

export const {
  IncrementUpcomingMoviePageIndex,
  IncrementTrendingMoviePageIndex,
  IncrementDiscoveryMoviePageIndex,
} = MoviePageIndex.actions;
export default MoviePageIndex.reducer;
