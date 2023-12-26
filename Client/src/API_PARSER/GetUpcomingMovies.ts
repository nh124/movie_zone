import { useEffect, useState } from "react";
import MovieManager from "../API/MovieManager";
import { useSelector } from "react-redux";

const GetUpcomingMovies = () => {
  const { getUpcoming } = MovieManager();
  const [upcomingMovies, setUpcomingMovies] = useState([{}]);

  const { UpcomingMoviePageIndex } = useSelector(
    (state: any) => state.MovieIndex
  );

  const getUpcomingMovies = () => {
    getUpcoming(UpcomingMoviePageIndex)
      .then((response) => {
        if (upcomingMovies.length === 1) {
          setUpcomingMovies(response.results);
        } else if (upcomingMovies.length > 1) {
          setUpcomingMovies([...upcomingMovies, ...response.results]);
        }
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    getUpcomingMovies();
  }, [UpcomingMoviePageIndex]);
  return upcomingMovies;
};

export default GetUpcomingMovies;
