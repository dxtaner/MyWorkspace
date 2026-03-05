import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${this.state.name} | Email: ${this.state.email}`);
  };

  render() {
    return (
      <div>
        <h2>Class Component Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassForm;
