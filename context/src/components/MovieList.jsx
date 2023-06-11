import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieList() {
  const { movies, setMovies } = useContext(MovieContext);
  return (
    <>
      <h1>MoviesList</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.movie_id}>
            {movie.title} ({movie.release_year})
          </li>
        ))}
      </ul>
      {movies.length < 4 && (
        <button
          onClick={() => {
            setMovies([
              ...movies,
              {
                movie_id: 4,
                title: "Harry Potter and the Goblet of Fire",
                release_year: 2005,
              },
            ]);
          }}
        >
          More
        </button>
      )}
    </>
  );
}
export default MovieList;

