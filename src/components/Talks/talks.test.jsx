import React from "react";
import { render, screen } from "../../test-utils.jsx";
import Talks from "./talks.jsx";

test("renders Talks component", () => {
  render(<Talks />);
  expect(screen.getAllByText(/Everybody Loves TAXII/)).toHaveLength(1);
});
