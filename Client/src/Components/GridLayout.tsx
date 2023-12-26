import Poster from "./Poster";
import ParseMovies from "../Rawfiles/ParseMovies";
import GenreDict from "../API_PARSER/GenreDict";
const GridLayout = ({
  start,
  end,
  MovieList,
}: {
  start: number;
  end: number;
  MovieList: [];
}) => {
  const GenreDictionary = GenreDict();
  const parsed_movies = MovieList.map((movie) =>
    ParseMovies(movie, GenreDictionary)
  );
  const filtered_movies = parsed_movies.filter((movie) => movie !== undefined);

  return (
    <div
      className={`lg:h-full grid grid-cols-2 p-4 gap-3 md:grid-cols-3 lg:grid-cols-6 
      w-full h-full md:grid-rows-2 max-h-[1000px]`}
    >
      {filtered_movies.length > 0 &&
        filtered_movies
          .slice(start, end)
          .map((movie) => <Poster movie={movie} key={movie?.id} />)}
    </div>
  );
};

export default GridLayout;
