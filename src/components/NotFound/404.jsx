import styled from "styled-components";
import { keyframes } from "styled-components";
import React from "react";
import Footer from "../Footer/footer.jsx";
import Menu from "../Menu/menu.jsx";
import { Heading, Box, VStack } from "@chakra-ui/react";
import { FadeIn } from "../FadeIn/fadeIn.jsx";

/**
 * Very basic 404; not found routing handled in app.js.
 * Probably overkill to add styled components for this
 * but hey it was fun.
 * @return {ReactElement} not found component.
 */
const NotFound = () => {
  return (
    <>
      <Menu />
      <FadeIn>
        <Box
          as="section"
          h={[
            "calc(100vh - 109px)",
            "calc(100vh - 109px)",
            "calc(100vh - 64px)",
          ]}
          display="flex"
          alignItems="center"
          maxW="2xl"
          mx="auto"
          px={4}
          justifyContent="center"
        >
          <VStack
            gap={8}
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
      </FadeIn>
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
