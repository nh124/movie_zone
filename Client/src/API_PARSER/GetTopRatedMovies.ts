import { useEffect, useState } from "react";
import MovieManager from "../API/MovieManager";
import { useSelector } from "react-redux";

const GetTopRatedMovies = () => {
  const { getTopRated } = MovieManager();
  const [trendingMovies, setTrendingMovies] = useState([{}]);
  const { TrendingMoviePageIndex } = useSelector(
    (state: any) => state.MovieIndex
  );

  const getTopRatedMovies = () => {
    getTopRated(TrendingMoviePageIndex)
      .then((response) => {
        if (trendingMovies.length === 1) {
          setTrendingMovies(response.results);
        } else if (trendingMovies.length > 1) {
          setTrendingMovies([...trendingMovies, ...response.results]);
        }
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    getTopRatedMovies();
  }, [TrendingMoviePageIndex]);
  return trendingMovies;
};

export default GetTopRatedMovies;
