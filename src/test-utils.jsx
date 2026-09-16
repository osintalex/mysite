import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./components/Theme/theme.js";

function render(ui, { wrapper, ...options } = {}) {
  const ProviderWrapper = ({ children }) => (
    <ChakraProvider value={system}>{children}</ChakraProvider>
  );

  return rtlRender(ui, {
    wrapper: wrapper
      ? ({ children }) => (
          <ProviderWrapper>
            <wrapper>{children}</wrapper>
          </ProviderWrapper>
        )
      : ProviderWrapper,
    ...options,
  });
}

export { render };
export * from "@testing-library/react";
