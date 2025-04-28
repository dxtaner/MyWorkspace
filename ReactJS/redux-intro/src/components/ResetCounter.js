import React from "react";
import { connect } from "react-redux";
import { resetCounter } from "../redux/actions/counterActions"; // Import your action creator

class ResetCounter extends React.Component {
  handleReset = () => {
    this.props.resetCounter();
  };

  render() {
    return (
      <div>
        <h2>Reset Counter</h2>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default connect(null, { resetCounter })(ResetCounter);
