import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./about.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../Theme/theme.js";

test("renders About component", () => {
  render(
    <ChakraProvider value={system}>
      <About />
    </ChakraProvider>
  );
  expect(screen.getByText("Здравствуйте!")).toBeInTheDocument();
});
