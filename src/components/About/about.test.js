import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./about.js";
import { ChakraProvider } from "@chakra-ui/react";

test("renders About component", () => {
  render(
    <ChakraProvider>
      <About />
    </ChakraProvider>
  );
  expect(screen.getByText("Здравствуйте!")).toBeInTheDocument();
});
