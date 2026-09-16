import React from "react";
import { render, screen } from "../../test-utils.jsx";
import Footer from "./footer.jsx";

test("renders Footer component", () => {
  render(<Footer />);
  expect(screen.getByLabelText("return-home")).toBeInTheDocument();
});
