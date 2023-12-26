import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTab, setCurrentTab } from "../Redux/MovieStatusTabReducer";
import { setStart, setEnd } from "../Redux/GridSizeIndexReducer";
import getTopRatedMovies from "../API_PARSER/GetTopRatedMovies";
import GetUpcomingMovies from "../API_PARSER/GetUpcomingMovies";

const MovieTab = () => {
  const getTopMovies = getTopRatedMovies();
  const getUpcomingMovies = GetUpcomingMovies();
  const { Tab } = useSelector((state) => state.MovieStatusTab);
  const { start, end } = useSelector((state) => state.GridSizeIndex);
  const dispatch = useDispatch();
  const { TrendingMoviePageIndex } = useSelector(
    (state: any) => state.MovieIndex
  );
  const { UpcomingMoviePageIndex } = useSelector(
    (state: any) => state.MovieIndex
  );
  useEffect(() => {
    if (Tab === "Trending") dispatch(setCurrentTab(getTopMovies));
    if (Tab === "Upcoming") dispatch(setCurrentTab(getUpcomingMovies));
  }, [Tab]);

  useEffect(() => {
    dispatch(setStart(0));
    dispatch(setEnd(length));
  }, [Tab]);

  useEffect(() => {
    dispatch(setCurrentTab(getTopMovies));
  }, [getTopMovies]);

  useEffect(() => {
    if (TrendingMoviePageIndex > 1) {
      dispatch(setCurrentTab(getTopMovies));
    }
  }, [TrendingMoviePageIndex]);

  useEffect(() => {
    if (UpcomingMoviePageIndex > 1) {
      dispatch(setCurrentTab(getUpcomingMovies));
    }
  }, [UpcomingMoviePageIndex, getUpcomingMovies, dispatch]);

  return (
    <div className="flex gap-3 sm:text-base text-sm">
      <button
        className={`${
          Tab === "Trending" ? "text-[#AAAAAA]" : "text-[#666666]"
        }`}
        onClick={() => dispatch(setTab("Trending"))}
      >
        Trending
      </button>
      <button
        className={`${
          Tab === "Upcoming" ? "text-[#AAAAAA]" : "text-[#666666]"
        }`}
        onClick={() => dispatch(setTab("Upcoming"))}
      >
        Upcoming
      </button>
      <button
        className={`${
          Tab === "Now Playing" ? "text-[#AAAAAA]" : "text-[#666666]"
        }`}
      >
        Now Playing
      </button>
    </div>
  );
};

export default MovieTab;
