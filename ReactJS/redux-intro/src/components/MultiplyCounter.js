import React, { Component } from "react";
import { connect } from "react-redux";
import { multiplyCounter } from "../redux/actions/counterActions"; // İlgili action yaratıcısını içeri aktarın

class MultiplyCounter extends Component {
  constructor() {
    super();
    this.state = {
      factor: 2, // İlk başta faktör 2 olarak ayarlanır
    };
  }

  handleFactorChange = (event) => {
    this.setState({ factor: event.target.value });
  };

  handleMultiply = () => {
    this.props.multiplyCounter(this.state.factor);
  };

  render() {
    return (
      <div>
        <h2>Multiply Counter</h2>
        <p>Factor: {this.state.factor}</p>
        <input
          type="number"
          value={this.state.factor}
          onChange={this.handleFactorChange}
        />
        <button onClick={this.handleMultiply}>Multiply</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer,
  };
};

export default connect(mapStateToProps, { multiplyCounter })(MultiplyCounter);
