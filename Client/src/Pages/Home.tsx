import { PageLayout } from "../Components/pageLayout";
import SplashImage from "../Components/SplashImage";
import GridResize from "../Hooks/gridResize";
import { useSelector } from "react-redux";
import MovieTab from "../Components/MovieTab";
import UpdatePage from "../Components/UpdatePage";
import GridLayout from "../Components/GridLayout";

const Home = () => {
  const { currentTab } = useSelector((state) => state.MovieStatusTab);
  const { start, end } = useSelector((state) => state.GridSizeIndex);

  return (
    <PageLayout>
      <SplashImage />
      <GridResize />
      <div className="w-full md:w-[70%] h-fit flex sm:flex-row justify-between px-1 sm:px-4 text-white sm:py-5 py-1 flex-col gap-3">
        <span className="text-base sm:text-lg">Recently Updated</span>

        <div className="flex flex-row items-center gap-2 justify-between">
          <MovieTab />
          <UpdatePage currentPage="Home" />
        </div>
      </div>
      <div className="w-full h-full md:w-[70%]">
        <GridLayout MovieList={currentTab} start={start} end={end} />
      </div>
    </PageLayout>
  );
};

export default Home;
