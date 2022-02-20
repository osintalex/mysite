import styled from "styled-components";
import { keyframes } from "styled-components";
import React from "react";
import Footer from "../Footer/footer.js";
import Menu from "../Menu/menu.js";
import { Heading, Box, SlideFade, VStack } from "@chakra-ui/react";

/**
 * Very basic 404; not found routing handled in app.js.
 * Probably overkill to add styled components for this
 * but hey it was fun.
 * @return {component} not found component.
 */
const NotFound = () => {
  return (
    <>
      <Menu />
      <SlideFade in>
        <Box
          as="section"
          h={[
            "calc(100vh - 109px)",
            "calc(100vh - 109px)",
            "calc(100vh - 64px)",
          ]}
          d="flex"
          alignItems="center"
          maxW="2xl"
          mx="auto"
          px={4}
          justifyContent="center"
        >
          <VStack
            spacing={8}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Box>
              <Heading as="h2" size="xl">
                Oh no, that url doesn&apos;t exist!
              </Heading>
              <Spinner>😱</Spinner>
            </Box>
          </VStack>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 1rem;
  font-size: 2rem;
  justify-content: center;
`;
export default NotFound;
