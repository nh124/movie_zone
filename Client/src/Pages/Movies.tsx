import { useEffect, useState } from "react";
import GetDiscover from "../API_PARSER/GetDiscover";
import { PageLayout } from "../Components/pageLayout";
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import GridLayout from "../Components/GridLayout";
import GridResize from "../Hooks/gridResize";
import UpdatePage from "../Components/UpdatePage";
import { setCurrentTab, setTab } from "../Redux/MovieStatusTabReducer";
const Movies = () => {
  const { start, end } = useSelector((state) => state.GridSizeIndex);
  const { currentTab } = useSelector((state) => state.MovieStatusTab);
  const discoverMovies = GetDiscover();
  const { submitFilter } = useSelector((state) => state.filters);
  const [movieList, setMovieList] = useState([{}]);
  const { DiscoveryMoviePageIndex } = useSelector((state) => state.MovieIndex);
  const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setMovieList(discoverMovies);

    dispatch(setTab("Movies"));
    // console.log(start, end);
    // console.log(DiscoveryMoviePageIndex);
  }, [discoverMovies]);

  useEffect(() => {
    if (submitFilter || DiscoveryMoviePageIndex > 1) {
      setMovieList((previousMovieList) => {
        return [...previousMovieList, ...discoverMovies];
      });
    }
  }, [submitFilter, discoverMovies, DiscoveryMoviePageIndex]);

  useEffect(() => {
    dispatch(setCurrentTab(movieList));
    console.log(movieList);
  }, [movieList]);

  // useEffect(() => {
  //   console.log(movieList);
  // }, [movieList]);

  return (
    <PageLayout>
      <GridResize />
      <div>
        <div className="w-full h-auto">
          <div className="flex flex-col gap-2 py-4 px-4 ">
            <div className="flex flex-row items-center justify-between">
              <span className="text-xl font-bold text-white">Movies</span>
              <button
                className="px-2 py-2 bg-slate-800 w-fit rounded-lg sm:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaFilter size={20} color="gray" />
              </button>
            </div>
            <div className="flex flex-row w-full h-auto">
              <Filter showFilters={showFilters} />
              <UpdatePage currentPage="Movies" />
            </div>

            <div className="w-full max-h-[1600px] sm:max-h-[1050px] h-[1000px]">
              <GridLayout MovieList={movieList} start={start} end={end} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Movies;
