import React, { Component } from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
};

const textStyle = {
  fontSize: "64px",
  color: "white",
  fontWeight: "800px",
};

export default class NotFound extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <h2 style={textStyle}>Sayfa bulunamadı!!!!!</h2>
      </div>
    );
  }
}
