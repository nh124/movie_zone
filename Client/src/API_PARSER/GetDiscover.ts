import { useEffect, useState } from "react";
import MovieManager from "../API/MovieManager";
import { useDispatch, useSelector } from "react-redux";
import { setSubmitFilter } from "../Redux/filterReducer";

const GetDiscover = () => {
  const [discoverMovies, setDiscoverMovies] = useState([{}]);
  const { submitFilter } = useSelector((state) => state.filters);
  const { filters } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const { DiscoveryMoviePageIndex } = useSelector((state) => state.MovieIndex);
  const getDiscoverMovies = () => {
    const { getDiscover } = MovieManager();
    getDiscover(DiscoveryMoviePageIndex, filters)
      .then((response) => {
        setDiscoverMovies(response.results);
        dispatch(setSubmitFilter(false));
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    getDiscoverMovies();
  }, []);

  useEffect(() => {
    if (submitFilter || DiscoveryMoviePageIndex > 1) {
      getDiscoverMovies();
    }
  }, [submitFilter, DiscoveryMoviePageIndex]);
  return discoverMovies;
};

export default GetDiscover;
