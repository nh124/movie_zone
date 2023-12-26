import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export const MovieStatusTab = createSlice({
  name: "UpcomingMoviePageIndex",
  initialState: {
    Tab: "Trending",
    currentTab: [],
  },
  reducers: {
    setTab: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        Tab: action.payload,
      };
    },
    setCurrentTab: (state, action: PayloadAction<[]>) => {
      return {
        ...state,
        currentTab: action.payload,
      };
    },
  },
});
export const { setTab, setCurrentTab } = MovieStatusTab.actions;
export default MovieStatusTab.reducer;
