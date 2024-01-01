import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
  test("renders SearchInput component", () => {
    render(<SearchInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls textChange prop when input value changes", () => {
    const mockTextChange = jest.fn();
    render(<SearchInput textChange={mockTextChange} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(mockTextChange).toHaveBeenCalled();
  });
});
