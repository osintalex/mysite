import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./menu.js";

test("renders Menu component", () => {
  render(<Menu />);
  expect(screen.getByLabelText("navigation-menu")).toBeInTheDocument();
  expect(screen.getAllByText(/Home|Blog|Work/)).toHaveLength(3);
});
