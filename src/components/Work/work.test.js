import React from "react";
import { render, screen } from "@testing-library/react";
import Work from "./work.js";

test("renders Work component", () => {
  render(<Work />);
  expect(
    screen.getAllByText(
      /PwC Cybersecurity|PGI|Sudan Art|General Assembly|Black Lives Matter|Palo Alto Networks/
    )
  ).toHaveLength(5);
});
