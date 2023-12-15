import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchMovie,
  onNewMovieSubmit,
  onUpdateMovieSubmit,
} from "../../actions/newMovie";
import NewMovieForm from "../NewMovieForm";
import "./NewMoviePage.css";

class NewMoviePage extends Component {
  componentDidMount() {
    const { match, fetchMovie, movie } = this.props;
    if (!movie && match.params._id) {
      fetchMovie(match.params._id);
    }
  }

  render() {
    const { movie, newMovie, onNewMovieSubmit, onUpdateMovieSubmit } =
      this.props;

    return (
      <div className="container">
        <h2>New Movie</h2>
        <NewMovieForm
          movie={movie}
          newMovie={newMovie}
          onNewMovieSubmit={onNewMovieSubmit}
          onUpdateMovieSubmit={onUpdateMovieSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ newMovie, movies }, props) => {
  return {
    newMovie,
    movie: movies.movieList.find((item) => item._id === props.match.params._id),
  };
};

const mapDispatchToProps = {
  onNewMovieSubmit,
  onUpdateMovieSubmit,
  fetchMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
