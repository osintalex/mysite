import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./404.js";

test("renders Not Found component", () => {
  render(<NotFound />);
  expect(
    screen.getByText("Oh no, that url doesn't exist!")
  ).toBeInTheDocument();
});
