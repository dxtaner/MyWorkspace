import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

describe("Copy Emoji", () => {
  let copyEmoji;

  beforeEach(() => {
    render(<App />);
    copyEmoji = screen.getByText("Yum");
  });

  test("should copy emoji to clipboard on click", () => {
    userEvent.click(copyEmoji);
    const clipboardText = copyEmoji.parentElement.getAttribute(
      "data-clipboard-text"
    );
    expect(clipboardText).toMatch("😋");
  });
});
