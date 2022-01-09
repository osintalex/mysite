import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer.js";

test("renders Footer component", () => {
  render(<Footer />);
  expect(screen.getByLabelText("return-home")).toBeInTheDocument();
});
