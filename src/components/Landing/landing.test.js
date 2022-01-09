import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "./landing.js";

test("renders Landing component", () => {
    render(<Landing />);
    expect(screen.getByText("Hi, I'm Alexander")).toBeInTheDocument();
  });