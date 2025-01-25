import React from "react";
import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/dom";

describe("Counter Component", () => {
  /* it("Counter as 0", () => {
    render(<Counter />);
    const countervalue = screen.getByText(/Counter value:0/i);
    expect(countervalue).toBeInTheDocument();
  }); */
  it("increment is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getById("increment-button");
    fireEvent.click(incrementButton);
    const countView = screen.getByText(/Counter value: 0/i);
    expect(countView).toBeInTheDocument();
  });
});
