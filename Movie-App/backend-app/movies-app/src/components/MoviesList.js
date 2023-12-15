import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { Grid } from "semantic-ui-react";
import { HashLoader } from "react-spinners";

const MoviesList = ({ movies, deleteMovie }) => {
  const emptyMessage = <p>There are no movies yet.</p>;

  const loader = (
    <HashLoader size={40} color="#36bdb3" loading={movies.fetching} />
  );
  const error = <h3>Error retrieving data!</h3>;

  const moviesList = (
    <Grid stackable centered columns={2}>
      {movies.movieList.map((movie) => (
        <MovieCard key={movie._id} deleteMovie={deleteMovie} movie={movie} />
      ))}
    </Grid>
  );

  return (
    <div>
      {loader}
      {movies.error.response ? error : moviesList}
      {movies.length === 0 && emptyMessage}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    movieList: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
  }).isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default MoviesList;
