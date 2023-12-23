import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Header Rendering", () => {
  test("renders Header component with correct title", () => {
    render(<App />);
    const headerElement = screen.getByText("Emoji Search");
    expect(headerElement).toBeInTheDocument();
  });
});
