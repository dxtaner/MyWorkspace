import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import emojiList from "../emojiList.json";

describe("Emoji List Render", () => {
  const firstEmojiList = emojiList.slice(0, 20);

  beforeEach(() => {
    render(<App />);
  });

  test("should render the first 20 emojis", () => {
    firstEmojiList.forEach((item) => {
      const emojiElement = screen.getByText(item.title);
      expect(emojiElement).toBeInTheDocument();
    });
  });
});
