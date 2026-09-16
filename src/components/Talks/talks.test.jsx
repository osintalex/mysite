import React from "react";
import { render, screen } from "@testing-library/react";
import Talks from "./talks.jsx";

test("renders Talks component", () => {
  render(<Talks />);
  expect(screen.getAllByText(/Everybody Loves TAXII/)).toHaveLength(1);
});
