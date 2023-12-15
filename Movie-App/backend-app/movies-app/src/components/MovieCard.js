import React from "react";
import { Card, Grid, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, deleteMovie }) => {
  const editButton = (
    <Button animated="vertical" as={Link} to={`/movie/${movie._id}`}>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name="right arrow" />
      </Button.Content>
    </Button>
  );

  const deleteButton = (
    <Button animated="vertical" onClick={() => deleteMovie(movie._id)}>
      <Button.Content hidden>Delete</Button.Content>
      <Button.Content visible>
        <Icon name="trash" />
      </Button.Content>
    </Button>
  );

  return (
    <Grid.Column>
      <Card
        centered
        image={movie.cover}
        header={movie.title}
        extra={
          <div className="ui two buttons">
            {editButton}
            {deleteButton}
          </div>
        }
      />
    </Grid.Column>
  );
};

export default MovieCard;
