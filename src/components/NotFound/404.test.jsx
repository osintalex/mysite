import React from "react";
import { render, screen } from "../../test-utils.jsx";
import NotFound from "./404.jsx";

test("renders Not Found component", () => {
  render(<NotFound />);
  expect(
    screen.getByText("Oh no, that url doesn't exist!")
  ).toBeInTheDocument();
});
