import React from "react";
import { render, screen } from "../../test-utils.jsx";
import Landing from "./landing.jsx";

test("renders Landing component", () => {
  render(<Landing />);
  expect(screen.getByText("Hi, I'm Alexander")).toBeInTheDocument();
});
