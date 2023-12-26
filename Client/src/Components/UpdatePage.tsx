import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setStart, setEnd } from "../Redux/GridSizeIndexReducer";
import {
  IncrementTrendingMoviePageIndex,
  IncrementUpcomingMoviePageIndex,
  IncrementDiscoveryMoviePageIndex,
} from "../Redux/MovieIndexReducer";
const UpdatePage = ({ currentPage }: { currentPage: string }) => {
  const { start, end } = useSelector((state) => state.GridSizeIndex);
  const { Tab, currentTab } = useSelector((state) => state.MovieStatusTab);
  const { length } = useSelector((state) => state.GridSize);
  const dispatch = useDispatch();
  const setPage = (forward: boolean) => {
    console.log(currentTab);
    if (forward && start + length > currentTab.length) return;
    if (!forward && start - length < 0) return;

    if (forward) {
      dispatch(setStart(start + length));
      dispatch(setEnd(end + length));

      //   if (start + 2 * length > currentTab.length) {
      //     if (currentPage === "Home") {
      //       if (Tab === "Trending") dispatch(IncrementTrendingMoviePageIndex());
      //       if (Tab === "Upcoming") dispatch(IncrementUpcomingMoviePageIndex());
      //     } else if (currentPage === "Movies") {
      //       dispatch(IncrementDiscoveryMoviePageIndex());
      //     }
      //   }

      if (Tab === "Trending") dispatch(IncrementTrendingMoviePageIndex());
      if (Tab === "Upcoming") dispatch(IncrementUpcomingMoviePageIndex());
      if (Tab === "Movies") dispatch(IncrementDiscoveryMoviePageIndex());
    } else {
      dispatch(setStart(start - length));
      dispatch(setEnd(end - length));
    }
  };
  return (
    <div className="flex flex-row gap-1">
      <button onClick={() => setPage(false)}>
        <MdOutlineKeyboardArrowLeft size={20} />
      </button>
      <button onClick={() => setPage(true)}>
        <MdOutlineKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default UpdatePage;
