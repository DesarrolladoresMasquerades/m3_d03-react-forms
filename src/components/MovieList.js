import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [moviesData, setMoviesData] = useState(moviesDataJSON);
  const [movies, setMovies] = useState(moviesDataJSON);


  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} />
      <AddMovie addMovie={addNewMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
