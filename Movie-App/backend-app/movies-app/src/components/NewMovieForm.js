import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Button, Form, Image, Message } from "semantic-ui-react";
import InlineError from "./InlineError";
import "./NewMovieForm.css";

class NewMovieForm extends Component {
  state = {
    _id: this.props.movie ? this.props.movie._id : "",
    title: this.props.movie ? this.props.movie.title : "",
    cover: this.props.movie ? this.props.movie.cover : "",
    errors: {},
    redirect: false,
  };

  static propTypes = {
    onNewMovieSubmit: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { movie } = nextProps.newMovie;
    if (movie.title && movie.title !== this.state.title) {
      this.setState({
        title: movie.title,
        cover: movie.cover,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    const errors = this.validate();
    this.setState({
      errors,
      redirect: true,
    });

    const _id = this.state._id || this.props.newMovie.movie._id;

    if (Object.keys(errors).length === 0) {
      if (!_id) {
        this.props.onNewMovieSubmit(this.state);
      } else {
        this.props.onUpdateMovieSubmit({ ...this.state, _id });
      }
    }
  };

  validate = () => {
    const errors = {};
    if (!this.state.title) {
      errors.title = "Can't be blank.";
    }
    if (!this.state.cover) {
      errors.cover = "Can't be blank.";
    }
    return errors;
  };

  renderForm = () => {
    const { errors } = this.state;

    return (
      <Form
        onSubmit={this.onSubmit}
        loading={
          this.props.newMovie.fetching || this.props.newMovie.movie.fetching
        }
        className="form-container">
        <Form.Field className="form-field">
          <label>Title</label>
          {errors.title && (
            <InlineError message={errors.title} className="error-message" />
          )}
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
        </Form.Field>
        <Form.Field className="form-field">
          <label>Cover Url</label>
          {errors.cover && (
            <InlineError message={errors.cover} className="error-message" />
          )}
          <input
            id="cover"
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            placeholder="Cover Url"
          />
        </Form.Field>
        <Image
          src={this.state.cover}
          size="small"
          className="image-preview"
          style={{ marginTop: "20px" }}
        />
        <div className="clearfix"></div>
        <Button type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    );
  };

  render() {
    const { done, error } = this.props.newMovie;
    const { redirect } = this.state;

    return (
      <div>
        {done && redirect ? (
          <Redirect to="/movies" />
        ) : (
          <div>
            {this.renderForm()}
            <div className="message-container">
              {error.response && (
                <Message negative>
                  <Message.Header>We're Sorry</Message.Header>
                  <p>A problem occurred while recording.</p>
                </Message>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default NewMovieForm;
