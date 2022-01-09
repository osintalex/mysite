import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./app.js";

test("renders App component", () => {
  render(<App />);
  expect(screen.getByText("Hi, I'm Alexander")).toBeInTheDocument();
});
